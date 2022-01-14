const { getById } = require('../../repositories')

const getNoteById = async (req, res, next) => {
  const { id } = req.params
  //   console.log(id)
  try {
    const noteById = await getById(id)
    res.json({ status: 'success', data: { noteById } })
  } catch (error) {
    next(error)
  }
}

module.exports = getNoteById
