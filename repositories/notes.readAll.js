const notesPath = require('./notes.path')
const fs = require('fs').promises

const getAll = async () => {
  try {
    const data = await fs.readFile(notesPath, 'utf8')
    const notes = await JSON.parse(data)
    return notes
  } catch (error) {
    console.log('File read error', error.message)
    throw error.message
  }
}

module.exports = getAll
