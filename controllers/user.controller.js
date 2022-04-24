const bcrypt = require('bcrypt')
const db = require("../config/db")
const { generateToken } = require("../middlewares/auth")

exports.register = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [
            email
        ])

        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!")
        }

        const salt = await bcrypt.genSalt(10)
        const bcryptPassword = await bcrypt.hash(password, salt)

        let newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, bcryptPassword]
        )

        const jwtToken = generateToken(newUser.rows[0].owner_id)

        return res.json({ jwtToken })
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [
            email
        ]);

        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }

        const validPassword = await bcrypt.compare(
            password,
            user.rows[0].password
        );

        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }
        const jwtToken = generateToken(user.rows[0].owner_id);
        return res.json({ jwtToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
}