const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const path = require('path')
const notesRouter = require('./routes/notes')
const authRouter = require('./routes/auth/auth.router')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/notes', notesRouter)
app.use('/link', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message: message })
})

module.exports = app
