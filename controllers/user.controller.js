const bcrypt = require('bcrypt')
const db = require("../config/db")
const { generateToken } = require("../middlewares/auth")

exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await db.query(
            `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
            [email, hashedPassword]
        );

        const token = generateToken({ userId: user.rows[0].id });
        return res.status(200).json({
            message: "User created successfully",
            token
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error creating user",
            error: err.message
        });
    }
}


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await db.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );

        if (!user.rows[0]) {
            res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);

        if (!isMatch) {
            return res.status(402).json({
                message: "Incorrect password"
            });
        }

        const token = generateToken({ userId: user.rows[0].id });
        return res.status(200).json({
            message: "User logged in successfully",
            token
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error logging in user",
            error: err.message
        });
    }
}