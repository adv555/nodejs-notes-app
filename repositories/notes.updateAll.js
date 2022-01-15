const fs = require('fs').promises
const notesPath = require('./notes.path')

const updateAll = async data => {
  try {
    await fs.writeFile(notesPath, JSON.stringify(data, null, '\t'))
  } catch (error) {
    console.log('File write error', error.message)
    throw error.message
  }
}

module.exports = updateAll
