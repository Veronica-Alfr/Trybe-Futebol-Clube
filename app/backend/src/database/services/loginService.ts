// import User from "../models/user";
// import { JwtService } from "./jwtService";
// import { compareSync } from 'bcryptjs';

export default class LoginService {
    constructor() { }

//     public login = async (email: string, password: string): Promise<string> => {  
//        const user = await User.findOne({
//        where: { email, password },
//     });
//   }

//       if (!compareSync(password, user.password)) { // email e senha são existentes e iguais ?
//        const e = new Error('Incorrect email or passwords');
//        e.name = 'UnauthorizedUserError';
//        throw e;
//    }

//     const { password: _, ...userWithoutPass } = user.dataValues; // só user ?

//     const token = JwtService.sign(userWithoutPass);

//     return token;
}

// const login = async (email: string, password: string) => {
//     const user = await User.findOne({
//        where: { email, password },
//    }); // isso funciona ?

//     if (user.password !== password || user.email !== email) {
//        const e = new Error('Incorrect email or passwords');
//        e.name = 'UnauthorizedUserError';
//        throw e;
//    }

//     const { password: _, ...userWithoutPass } = user.dataValues;

//     const token = JwtService.createToken(userWithoutPass);

//     return token;
// };
