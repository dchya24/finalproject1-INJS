const joi = require("joi")

const USER_SCHEMA = joi.object({
    email: joi.string().trim(true).required(),
    password: joi.string().trim(true).required()
})

module.exports = {
    USER_SCHEMA
}