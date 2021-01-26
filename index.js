require('dotenv').config()
const server = require('./api/server.js')

const PORT = process.env.PORT || 5000

console.log(process.env.NODE_ENV)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})