import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';
import Jwt from '../middlewares/token/tokenVerify';

const loginRouter = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post('/', (req, res) => loginController.login(req, res));
loginRouter.get('/validate', Jwt.verifyToken, (req, res) => loginController)

export default loginRouter;
