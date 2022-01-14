const notesPath = require('./notesPath')
const fs = require('fs').promises

const getAll = async () => {
  try {
    const data = await fs.readFile(notesPath, 'utf8')
    const notes = await JSON.parse(data)
    return notes
  } catch (error) {
    console.log('Error at getAll', error.message)
    throw error.message
  }
}

module.exports = getAll
