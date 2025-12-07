import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (request, response) => {
  response.status(201).send({ msg: 'Hello World!' })
  // response.send('Hello World!');
})

app.get('/api/users', (request, response) => {
  response.status(201).send([
    {
      id: 1,
      username: 'John Doe',
      displayName: 'John Doe'
    },
    {
      id: 2,
      username: 'Max Mustermann',
      displayName: 'MM'
    },
    {
      id: 3,
      username: 'James Bond',
      displayName: 'JB 007'
    }
  ])
})

app.get('/api/products', (request, response) => {
  response.status(201).send([
    { id: 123, name: 'chicken', price: 12.99 },
    { id: 321, name: 'cat', price: 22.33 },
    { id: 231, name: 'dog', price: 6.21 }
  ])
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
