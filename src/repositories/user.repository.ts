import { User } from '../entities/user.entity'

export class UseRepository {
  users: User[] = []
  static save: any
  static UseRepository: any
  async findByUsername(username: string) {
    return this.users.find(user => user.name === username)
  }

  async save(data: User) {
    this.users.push(data)
    return data
  }
}
