import { Request, Response } from 'express';
import { validateUser } from "../middlewares/validations/schemas";
import ILogin from '../interfaces/ILogin';
import ILoginService from '../interfaces/ILoginService';

export default class LoginController {
        constructor(private authService: ILoginService) {} 

        async login(req: Request, res: Response) { // pq só aceita Promise<void> ?

        const loginBody: ILogin = validateUser(req.body);

        const token = await this.authService.login(loginBody.email, loginBody.password);

        res.status(200).json({ token });
   };
}
