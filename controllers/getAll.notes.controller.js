const { readAll } = require('../services')

const getAllNotes = async (req, res, next) => {
  try {
    const notes = await readAll()

    res.status(200).json({ status: 'success', data: { notes } })
  } catch (error) {
    next(error)
  }
}

module.exports = getAllNotes
