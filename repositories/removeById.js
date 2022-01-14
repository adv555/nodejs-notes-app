const getAll = require('./getAll')
const updateAll = require('./updateAll')

const removeById = async id => {
  //   console.log(id)
  const notes = await getAll()
  const idx = notes.findIndex(note => note.id === id)

  if (idx === -1) {
    return null
  }
  const newNotes = notes.filter(note => note.id !== id)
  await updateAll(newNotes)
  return notes[idx]
}

module.exports = removeById
