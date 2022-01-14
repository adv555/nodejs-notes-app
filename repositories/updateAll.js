const fs = require('fs').promises
const notesPath = require('./notesPath')

const updateAll = async data => {
  try {
    await fs.writeFile(notesPath, JSON.stringify(data, null, '\t'))
  } catch (error) {
    console.log('Error at updateAll', error.message)
    throw error.message
  }
}

module.exports = updateAll
