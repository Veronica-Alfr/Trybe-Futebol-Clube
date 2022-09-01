import LeaderboardService from "../services/leaderboardService";
import { Request, Response } from 'express';

export default class LeaderBoardController {
    constructor(private leaderBoardService: LeaderboardService) {} 

    async getLeaderBorder(_req: Request, res: Response): Promise<object> {
        const leaderboard = await this.leaderBoardService.getLeaderBorder();
        return res.status(200).json(leaderboard);
    }
}