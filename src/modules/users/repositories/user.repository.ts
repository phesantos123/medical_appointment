import { User } from "../entities/user.entity"

export interface    IuserRepository {

 findByUsername(username: string): Promise<User | undefined>
 save(data: User): Promise<void> 
}