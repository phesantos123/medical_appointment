import { User } from "../../entities/user.entity";
import { IuserRepository } from "../user.repository";

export class UserPrismaRepository implements IuserRepository {
   findByUsername(username: string): Promise<User | undefined>{
    throw new Error("Method not implemented");
   }
 save(data: User): Promise<void> {
  throw new Error("Method not implemented");
 }
}
