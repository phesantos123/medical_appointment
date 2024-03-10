import bcrypt from "bcryptjs";

import { IPasswordCrypto } from "./password.crypto";

export class PasswordBcrypt implements IPasswordCrypto {
    hash(password: string): Promise<String> {

        return bcrypt.hash(password, 10)

    }


}
