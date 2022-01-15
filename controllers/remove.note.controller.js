const { NotFound } = require('http-errors')
const { removeById } = require('../services')

const removeNote = async (req, res, next) => {
  const { id } = req.params

  try {
    const deletedNote = await removeById(id)

    if (!deletedContact) {
      throw new NotFound()
    }

    res.status(200).json({
      status: 'success',
      message: ' note deleted',
      data: { deletedNote },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = removeNote
