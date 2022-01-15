const { getById } = require('../services')

const getNoteById = async (req, res, next) => {
  const { id } = req.params

  try {
    const noteById = await getById(id)
    res.status(200).json({ status: 'success', data: { noteById } })
  } catch (error) {
    next(error)
  }
}

module.exports = getNoteById
