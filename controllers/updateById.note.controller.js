const { updateById } = require('../services')

const updateNoteById = async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedNote = await updateById(id, req.body)
    res.status(200).json({ status: 'success', message: 'note updated', data: { updatedNote } })
  } catch (error) {
    next(error)
  }
}

module.exports = updateNoteById
