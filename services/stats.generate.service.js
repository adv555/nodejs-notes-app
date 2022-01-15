const { getAll } = require('../repositories')

const generateStats = async () => {
  const notes = await getAll()
  let statistics = []

  notes.map(({ category, archived }) => {
    let idx = statistics.findIndex(stats => stats.category === category)

    if (idx > -1) {
      statistics[idx].total++

      if (archived) {
        statistics[idx].archived++
      }
    } else {
      statistics.push({ category, total: 1, archived: archived ? 1 : 0 })
    }
  })

  return statistics
}

module.exports = generateStats
