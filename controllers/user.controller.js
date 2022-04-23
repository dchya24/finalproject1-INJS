const User = require("../models/index").User;
const bcrypt = require('bcrypt')
const db = require("../config/db");
const { generateToken } = require("../middlewares/auth")

exports.createUser = async (req, res) => {
    const body = req.body
    const email = body.email
    const password = body.password

    return User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (!user) {
            return res.status(400).send({
                message: "email not found"
            })
        }
        const isValid = bcrypt.compareSync(password, user.password)

        if (!isValid) {
            return res.status(400).send({
                message: "Email and password not match"
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const token = generateToken({
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            email: user.email
        })
        res.status(200).send({
            status: "success",
            message: "Login sukses",
            token: token
        })
    })
}

exports.loginUser = async (req, res) => {
    const body = req.body;

    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const password = body.password;

    User.findOne({
        where: {
            email: email
        }
    }).then(users => {
        if (users) {
            return res.status(400).send({
                message: 'Email already exist'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hash
        }).then(users => {
            const token = generateToken({
                firstName: users.firstName,
                lastName: users.lastName,
                id: users.id,
                email: users.email
            })

            res.status(200).send({
                status: 'SUCCESS',
                message: 'User created',
                token: token
            })
        }).catch(error => {
            console.log("error", error)
            res.status(503).send({
                status: 'FAILED',
                message: 'user creation failed'
            })
        })
    })
}