const Joi = require('joi')
const { BadRequest } = require('http-errors')

const joiSchemaAddNote = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  category: Joi.string().valid('Task', 'Random Thought', 'Idea').required(),
  content: Joi.string().required(),
  archived: Joi.boolean(),
})

const joiSchemaUpdateNote = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  category: Joi.string().valid('Task', 'Random Thought', 'Idea'),
  content: Joi.string(),
  archived: Joi.boolean(),
})

const noteValidation = (req, res, next) => {
  const { error } = joiSchemaAddNote.validate(req.body)
  if (error) {
    throw new BadRequest(error.message)
  }
  next()
}

const noteUpdateValidation = (req, res, next) => {
  const { error } = joiSchemaUpdateNote.validate(req.body)
  if (error) {
    throw new BadRequest(error.message)
  }
  next()
}

module.exports = { noteValidation, noteUpdateValidation }
