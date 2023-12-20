import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (request: Request, response: Response) => {
  response.send('Testing ee ')
})

app.listen(port, () => {  
  console.log(`Server is running at http://localhost:${port}`)
})
