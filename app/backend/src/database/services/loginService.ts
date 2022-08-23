import User from "../models/user";
import { JwtService } from "./jwtService";
import { compareSync } from 'bcryptjs';
// import { Request, Response } from 'express';
// import VerifyToken from "../middlewares/token/tokenVerify";

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
    const { password: _, ...userWithoutPass } = user;

    const token = JwtService.sign(userWithoutPass);

    return token;
  }

  // public verifyToken = () => {
  //   const data = VerifyToken.verifyToken();
  //   const { role } = data;
  //   return role;
  // }
}
