const { getAll } = require('../repositories')

const getById = async id => {
  const notes = await getAll()

  const noteById = notes.find(note => note.id === id)
  if (!noteById) {
    return null
  }
  return noteById
}

module.exports = getById
