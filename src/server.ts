import express, { Request, Response } from 'express'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Testing library ')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
