const app = require('../app')
require('dotenv').config()

const PORT = process.env.PORT || 5000

app.listen(PORT, error => {
  if (error) {
    console.log('Error at a server launch', err)
  }
  console.log(`Server running. Use our API on port: ${PORT}`)
})
