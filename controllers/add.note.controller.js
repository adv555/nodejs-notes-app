const { add } = require('../services')

const addNote = async (req, res, next) => {
  const body = req.body
  try {
    const newNote = await add(body)
    res.status(201).json({
      status: 'success',
      message: 'note added',
      data: { newNote },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = addNote
