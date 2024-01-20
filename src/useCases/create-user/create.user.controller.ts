import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user.usecase'
import { logger } from '../../utils/logger'
import { errorMonitor } from 'stream'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    logger.info('Usuario sendo criado !')
    try {
      const data = request.body
      const userCase = new CreateUserUseCase()
      const result = await userCase.execute(data)
      return response.json(result)
    } catch (error: any) {
      logger.error(`${error.message}\n${error.stack}`)
      return response.status(400).json(error.message)
    }
  }
}
