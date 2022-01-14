const express = require('express')
const router = express.Router()

const {
  getAllNotes,
  getNoteById,
  addNote,
  removeNote,
  getNotesStats,
  updateNoteById,
} = require('../services/controllers')

router.get('/stats', getNotesStats)
router.get('/', getAllNotes)
router.post('/', addNote)
router.get('/:id', getNoteById)
router.patch('/:id', updateNoteById)
router.delete('/:id', removeNote)

module.exports = router
