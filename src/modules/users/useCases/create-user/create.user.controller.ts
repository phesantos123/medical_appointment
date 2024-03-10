import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user.usecase";
import { logger } from "../../../../utils/logger";
import { IuserRepository } from "../../repositories/user.repository";
import { IPasswordCrypto } from '../../../../infra/shared/crypto/password.crypto';
export class CreateUserController {
  constructor(private userRepository: IuserRepository, private passwordCrypto: IPasswordCrypto) { }

  async handle(request: Request, response: Response) {
    logger.info("Usuario sendo criado !");
    try {
      const data = request.body;
      const userCase = new CreateUserUseCase(this.userRepository, this.passwordCrypto);

      const result = await userCase.execute(data);
      return response.json(result);
    } catch (err: any) {
      logger.error(`${err.message}\n${err.stack}`);
      // Verifique se statusCode está definido antes de usá-lo
      const statusCode = err.statusCode || 403;
      return response.status(statusCode).json(err.message);
    }
  }
}
