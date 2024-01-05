import express, { Request, Response } from 'express'
import { userRouter } from './routes/use.routes'

const app = express()
app.use(express.json())

app.use(userRouter)

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000}`)
})
