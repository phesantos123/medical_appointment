import { User } from '../entities/user.entity'

export class UserRepository {
  private users: User[] = [] // Use private para restringir o acesso direto fora da classe

  async findByUsername(username: string): Promise<User | undefined> {
    // Use Promise para indicar que retorna um User ou undefined
    return this.users.find(user => user.name === username)
  }

  async save(data: User): Promise<User> {
    // Use Promise para indicar que retorna um User
    this.users.push(data)
    return data
  }
}
