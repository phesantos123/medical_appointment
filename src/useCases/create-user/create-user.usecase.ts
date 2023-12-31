import { User } from '../../entities/user.entity'
import { UserRepository } from '../../repositories/user.repository'

type UserRequest = {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = new UserRepository()
    const user = User.create(data)
    if (!data.username || !data.password) {
      // Modifiquei a lógica de verificação
      throw new Error('Username/password is required')
    }
    const existUser = await userRepository.findByUsername(data.username)

    if (existUser) {
      throw new Error('Username already exists')
    }

    const userCreated = await userRepository.save(user) // Corrigido para userRepository.save(user)

    return userCreated
  }
}
