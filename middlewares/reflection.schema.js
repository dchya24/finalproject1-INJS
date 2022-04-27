const joi = require("joi")

const BODY_SCHEMA = joi.object({
  success: joi.string().trim(true).required(),
  low_point: joi.string().trim(true).required(),
  take_away: joi.string().trim(true).required()
})

const ID_SCHEMA = joi.object({
  id: joi.string().trim(true).guid().required()
})

module.exports = {
  BODY_SCHEMA,
  ID_SCHEMA
}