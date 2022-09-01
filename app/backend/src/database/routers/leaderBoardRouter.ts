import { Router } from 'express';
import LeaderboardService from '../services/leaderboardService';
import LeaderBoardController from '../controllers/leaderBoaderController';

const leaderBoardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderBoardController = new LeaderBoardController(leaderboardService);

leaderBoardRouter.get('/home', (req, res) => leaderBoardController.getLeaderBorder(req, res));

export default leaderBoardRouter;
