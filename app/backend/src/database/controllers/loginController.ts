import { Request, Response } from 'express';
import { validateUser } from "../middlewares/validations/schemas";
import ILogin from '../interfaces/ILogin';
import ILoginService from '../interfaces/ILoginService';

export default class LoginController {
        constructor(private loginService: ILoginService) {} 

        async login(req: Request, res: Response): Promise<object>  { // type object of res

        const loginBody: ILogin = validateUser(req.body);

        const token = await this.loginService.login(loginBody.email, loginBody.password);

        return res.status(200).json({ token });
   };

   verifyToken(req: Request, res: Response) {
        const { role } = req.body.user; 

        res.status(200).json({ role });
   }
}
