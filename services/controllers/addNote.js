const { add } = require('../../repositories')

const addNote = async (req, res, next) => {
  try {
    // console.log('body', req.body)

    const newNote = await add(req.body)
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
