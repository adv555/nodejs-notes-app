const { NotFound } = require('http-errors')
const removeById = require('../../repositories')

const removeNote = async (req, res, next) => {
  const { id } = req.params
  // console.log(id)
  try {
    const deletedNote = await removeById(id)
    if (!deletedContact) {
      throw new NotFound()
    }
    res.json({
      status: 'success',
      message: ' note deleted',
      data: { deletedNote },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = removeNote
