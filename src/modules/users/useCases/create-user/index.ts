import { CreateUserController } from './create.user.controller';
import { UserPrismaRepository } from './../../repositories/implementations/user.prisma.repository';

const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export { createUserController}