import { Router } from 'express';
import LeaderboardService from '../services/leaderboardService';
import LeaderboardController from '../controllers/leaderboaderController';

const leaderboardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

leaderboardRouter.get('/home', (req, res) => leaderboardController.getLeaderBorder(req, res));
leaderboardRouter.get('/away', (req, res) => leaderboardController.getAwayLeaderBorder(req, res));

export default leaderboardRouter;
