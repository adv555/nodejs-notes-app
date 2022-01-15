const { generateStats } = require('../services')

const getNotesStats = async (req, res, next) => {
  try {
    const statistics = await generateStats()

    res.status(200).json({ data: { statistics } })
  } catch (error) {
    next(error)
  }
}

module.exports = getNotesStats
