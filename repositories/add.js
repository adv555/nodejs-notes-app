const { customAlphabet } = require('nanoid/async')
const nanoid = customAlphabet('1234567890', 10)
const getAll = require('./getAll')
const updateAll = require('./updateAll')
const getDateFromContent = require('../helpers/getDateFromContent')

const add = async body => {
  //   console.log('body123', body)
  const { name, category, content } = body

  const newNote = {
    id: await nanoid(),
    name: name,
    created: new Date(),
    category: category,
    content: content,
    date: getDateFromContent(content),
    archived: false,
  }
  const notes = await getAll()
  notes.push(newNote)

  await updateAll(notes)
  //   console.table(newNote)
  return newNote
}

module.exports = add
