import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';

const loginRouter = Router();

// const loginService = new LoginService();
// const loginController = new LoginController(loginService);

// loginRouter.post('/', loginController.login);

export default loginRouter;
