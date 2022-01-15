const { getAll } = require('../repositories')

const readAll = async () => {
  const notes = await getAll()
  return notes
}
module.exports = readAll
