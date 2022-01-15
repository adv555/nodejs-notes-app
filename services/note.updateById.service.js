const { getAll, updateAll } = require('../repositories')
const getDateFromContent = require('../helpers/getDateFromContent')

const updateById = async (id, body) => {
  const { name, category, content, archived } = body
  const notes = await getAll()
  const idx = notes.findIndex(note => note.id === id)

  !name ? notes[idx].name : (notes[idx].name = name)
  !category ? notes[idx].category : (notes[idx].category = category)
  !content ? notes[idx].content : (notes[idx].content = content)
  !archived ? notes[idx].archived : (notes[idx].archived = archived)
  !content ? notes[idx].date : (notes[idx].date = getDateFromContent(content))

  updateAll(notes)

  return notes[idx]
}

module.exports = updateById
