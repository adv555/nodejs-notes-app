const { customAlphabet } = require('nanoid/async')
const nanoid = customAlphabet('1234567890', 10)

const { getAll, updateAll } = require('../repositories')
const getDateFromContent = require('../helpers/getDateFromContent')

const add = async data => {
  const { name, category, content } = data

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

  return newNote
}

module.exports = add
