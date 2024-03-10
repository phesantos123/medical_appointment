import { CustomError } from "../../../../errors/custom.error";
import { ParameterRequiredError } from "../../../../errors/parameter-required-error";
import { User } from "../../entities/user.entity";
import { IuserRepository } from "../../repositories/user.repository";

type UserRequest = {
  name: string;
  username: string;
  password: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: IuserRepository) { }

  async execute(data: UserRequest) {
    const user = User.create(data);
    if (!data.username || !data.password) {
      // Modifiquei a lógica de verificação
      throw new ParameterRequiredError("Username/password is required");
    }
    const existUser = await this.userRepository.findByUsername(data.username);

    if (existUser) {
      throw new CustomError("Username already exists", 400, "USER_EXITS_ERROR");
    }
    const userCreated = await this.userRepository.save(user); // Corrigido para userRepository.save(user)

    return userCreated;
  }
}
