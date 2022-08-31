import { Router } from 'express';
import LeaderBoardService from '../services/leaderBoardService';
import LeaderBoardController from '../controllers/leaderBoaderController';

const leaderBoardRouter = Router();

const leaderBoardService = new LeaderBoardService();
const leaderBoardController = new LeaderBoardController(leaderBoardService);

leaderBoardRouter.get('/home', (req, res) => leaderBoardController.getLeaderBorder(req, res));

export default leaderBoardRouter;
