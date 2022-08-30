import { Router } from 'express';
import MatchController from '../controllers/matchesController';
import MatchService from '../services/matchesService';
import Jwt from '../middlewares/token/tokenVerify';

const matchRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req, res) => matchController.list(req, res));
matchRouter.post('/', Jwt.verifyToken, (req, res) => matchController.create(req, res));
matchRouter.patch('/:id/finish', (req, res) => matchController.finish(req, res));

export default matchRouter;