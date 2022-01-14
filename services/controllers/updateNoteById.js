const { updateById } = require('../../repositories')

const updateNoteById = async (req, res, next) => {
  const { id } = req.params
  //   console.log(req.body)

  try {
    const updatedNote = await updateById(id, req.body)
    res.json({ status: 'success', message: 'note updated', data: { updatedNote } })
  } catch (error) {
    next(error)
  }
}

module.exports = updateNoteById
