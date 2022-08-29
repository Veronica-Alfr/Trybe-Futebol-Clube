import { Router } from 'express';
import TeamService from '../services/teamsService';
import TeamController from '../controllers/teamsController';

const teamRouter = Router();

const teamService = new TeamService();
const teamController = new TeamController(teamService);

teamRouter.get('/', (req, res) => teamController.list(req, res));

export default teamRouter;
