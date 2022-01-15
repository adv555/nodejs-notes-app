const generateStats = require('./stats.generate.service')
const readAll = require('./notes.getAll.service')
const add = require('./note.add.service')
const getById = require('./note.getById.service')
const removeById = require('./note.removeById.service')
const updateById = require('./note.updateById.service')

module.exports = { generateStats, readAll, add, getById, updateById, removeById }
