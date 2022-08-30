import { Router } from 'express';
import MatchController from '../controllers/matchesController';
import MatchService from '../services/matchesService';

const matchRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/', (req, res) => matchController.list(req, res));

export default matchRouter;