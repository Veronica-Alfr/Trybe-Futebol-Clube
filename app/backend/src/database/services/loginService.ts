import User from "../models/user";
import { JwtService } from "./jwtService";
import { compareSync } from 'bcryptjs';

export default class LoginService {
    public login = async (email: string, password: string): Promise<string> => {  
       const user = await User.findOne({
       where: { email },
    });

    if (!user || !compareSync(password, user.password)) {
        const e = new Error('Incorrect email or password');
        e.name = 'Unauthorized';
        throw e;
    }
    const  { id, role } = user;
    const token = JwtService.sign({ id, email, role });

    return token;
  }
}
