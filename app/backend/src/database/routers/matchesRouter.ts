import { Router } from 'express';
import MatchController from '../controllers/matchesController';
import MatchService from '../services/matchesService';
import Jwt from '../middlewares/token/tokenVerify';
import TeamService from '../services/teamsService';

const matchRouter = Router();

const matchService = new MatchService();
const teamService = new TeamService();
const matchController = new MatchController(matchService, teamService);

matchRouter.get('/', (req, res) => matchController.list(req, res));
matchRouter.post('/', Jwt.verifyToken, (req, res) => matchController.create(req, res));
matchRouter.patch('/:id/finish', (req, res) => matchController.finish(req, res));
matchRouter.patch('/:id', (req, res) => matchController.changeMatchResult(req, res));

export default matchRouter;