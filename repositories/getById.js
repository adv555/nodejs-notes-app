const getAll = require('./getAll')

const getById = async id => {
  const notes = await getAll()
  //   console.log(notes)
  const noteById = notes.find(note => note.id === id)
  if (!noteById) {
    return null
  }
  return noteById
}

module.exports = getById
