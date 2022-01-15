const getAllNotes = require('./getAll.notes.controller')
const getNoteById = require('./getById.note.controller')
const addNote = require('./add.note.controller')
const removeNote = require('./remove.note.controller')
const getNotesStats = require('./get.stats.controller')
const updateNoteById = require('./updateById.note.controller')

module.exports = { getAllNotes, getNoteById, addNote, removeNote, getNotesStats, updateNoteById }
