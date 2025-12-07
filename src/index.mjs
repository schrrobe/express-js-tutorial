import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const mockUsers = [
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
  },
  {
    id: 4,
    username: 'anna.mueller',
    displayName: 'Anna Müller'
  },
  {
    id: 5,
    username: 'leo.baumann',
    displayName: 'Leo Baumann'
  },
  {
    id: 6,
    username: 'natalia.schulz',
    displayName: 'Natalia Schulz'
  },
  {
    id: 7,
    username: 'florian.bosch',
    displayName: 'Florian Bosch'
  },
  {
    id: 8,
    username: 'marco.ritter',
    displayName: 'Marco Ritter'
  }
]

app.get('/', (request, response) => {
  response.status(201).send({ msg: 'Hello World!' })
  // response.send('Hello World!');
})

app.get('/api/users', (request, response) => {
    console.log(request.query);
    const {query: {filter,value},
    } = request;


    if(filter && value) return  response.status(201).send(
        mockUsers.filter((user) => user[filter].includes(value))
    );
    return response.status(201).send(mockUsers)
})

app.get('/api/users/:id', (request, response) => {
  console.log(request.params)
  const parsedId = parseInt(request.params.id)
  console.log(parsedId)
  if (isNaN(parsedId) || parsedId === null) {
    return response.status(400).send({ msg: 'Wrong Id, Bad request' })
  }

  const findUser = mockUsers.find((user) => user.id === parsedId)
  if (!findUser) {
    return response.sendStatus(400).send({ msg: 'Wrong Id, Bad request' })
  }
  return response.status(200).send(findUser)
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
