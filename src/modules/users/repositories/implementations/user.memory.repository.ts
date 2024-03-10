import { User } from '../../entities/user.entity'

export class userRepository {
  private users: User[] // Use private para restringir o acesso direto fora da classe
  private static instance: userRepository

  private constructor() {
    this.users = []
  }

  static getInstance() {
    if (!userRepository.instance) {
      userRepository.instance = new userRepository()
    }
    return userRepository.instance
  }

  async findByUsername(username: string): Promise<User | undefined> {
    // Use Promise para indicar que retorna um User ou undefined
    return this.users.find(user => user.username === username)
  }

  async save(data: User): Promise<User> {
    // Use Promise para indicar que retorna um User
    this.users.push(data)

    return data
  }
}
