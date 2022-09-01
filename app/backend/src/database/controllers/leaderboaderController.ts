import LeaderboardService from "../services/leaderboardService";
import { Request, Response } from 'express';

export default class LeaderboardController {
    constructor(private leaderBoardService: LeaderboardService) {} 

    async getLeaderBorder(_req: Request, res: Response): Promise<object> {
        const leaderboard = await this.leaderBoardService.getLeaderborder();
        return res.status(200).json(leaderboard);
    }
}