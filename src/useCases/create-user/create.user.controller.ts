import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user.usecase'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const data = request.body

    const userCase = new CreateUserUseCase()
    const result = await userCase.execute(data)

    return response.json(result)
  }
}
