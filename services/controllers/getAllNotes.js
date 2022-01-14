const { getAll } = require('../../repositories')

const getAllNotes = async (req, res, next) => {
  try {
    const notes = await getAll()

    res.json({ status: 'success', data: { notes } })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllNotes
