const { generateStats } = require('../../repositories')

const getNotesStats = async (req, res, next) => {
  try {
    const statistics = await generateStats()

    res.json({ data: { statistics } })
  } catch (error) {
    next(error)
  }
}

module.exports = getNotesStats
