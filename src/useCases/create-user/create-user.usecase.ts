import { User } from '../../entities/user.entity'
import { UseRepository } from '../../repositories/user.repository'

type UserRequest = {
  name: string
  username: string
  password: string
}

export class CreateUserUseCase {
  async execute(data: UserRequest) {
    const userRepository = new UseRepository()
    const user = User.create(data)
    if (!data.username && !data.password) {
      throw new Error('Username/password is required')
    }
    const existUser = await userRepository.findByUsername(data.username)

    if (existUser) {
      throw new Error('username already exists')
    }

    const userCreated = await UseRepository.save(user)

    return userCreated
  }
}
