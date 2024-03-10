import { User } from '../../entities/user.entity'

export class UserMemoryRepository {
  private users: User[] // Use private para restringir o acesso direto fora da classe
  private static instance: UserMemoryRepository

  private constructor() {
    this.users = []
  }

  static getInstance() {
    if (!UserMemoryRepository.instance) {
      UserMemoryRepository.instance = new UserMemoryRepository()
    }
    return UserMemoryRepository.instance
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
