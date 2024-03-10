import { randomUUID } from 'crypto'

type Iuser = {
  name: string
  password: string
  username: string
}

export class User {
  name: string
  password: String
  username: string
  id: string
  isAdmin: boolean

  private constructor(props: Iuser) {
    this.name = props.name
    this.password = props.password
    this.username = props.username
    this.id = randomUUID()
    this.isAdmin = false
  }

  static create(props: Iuser) {
    const user = new User(props)
    return user
  }
}
