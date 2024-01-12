import { User } from '../entities/user.entity'

export class UserRepository {
  private users: User[] // Use private para restringir o acesso direto fora da classe
  private static instance: UserRepository

  private constructor() {
    this.users = []
  }

  static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  async findByUsername(username: string): Promise<User | undefined> {
    // Use Promise para indicar que retorna um User ou undefined
    return this.users.find(user => user.username === username)
  }

  async save(data: User): Promise<User> {
    // Use Promise para indicar que retorna um User
    this.users.push(data)
    console.log(data)

    return data
  }
}
