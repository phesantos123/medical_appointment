import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user.usecase'
import { logger } from '../../utils/logger'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    logger.info('Usuario sendo criado !')
    try {
      const data = request.body
      const userCase = new CreateUserUseCase()
      const result = await userCase.execute(data)
      return response.json(result)
    } catch (err: any) {
      logger.error(`${err.message}\n${err.stack}`)
      // Verifique se statusCode está definido antes de usá-lo
      const statusCode = err.statusCode || 403
      return response.status(statusCode).json(err.message)
    }
  }
}
