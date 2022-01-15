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

const { noteValidation, noteUpdateValidation } = require('../middlewares/validation')

router.get('/stats', getNotesStats)
router.get('/', getAllNotes)
router.post('/', noteValidation, addNote)
router.get('/:id', getNoteById)
router.patch('/:id', noteUpdateValidation, updateNoteById)
router.delete('/:id', removeNote)

module.exports = router
