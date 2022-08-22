import User from "../models/user";
import { JwtService } from "./jwtService";
import { compareSync } from 'bcryptjs';
// import ILoginService from "../interfaces/ILoginService";

export default class LoginService {
    // constructor() { }

    public login = async (email: string, password: string): Promise<string> => {  
       const user = await User.findOne({
       where: { email, password },
    });

    if (!user || !compareSync(password, user.password) || user.email !== email) {
        const e = new Error('Incorrect email or passwords');
        e.name = 'UnauthorizedUserError';
        throw e;
    }
    const { password: _, ...userWithoutPass } = user; // só user ?

    const token = JwtService.sign(userWithoutPass);

    return token;
}
}
