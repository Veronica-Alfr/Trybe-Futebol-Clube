import LeaderboardService from "../services/leaderboardService";
import { Request, Response } from 'express';
import { homeOrTeam } from "../interfaces/Enum";

export default class LeaderboardController {
    constructor(private leaderBoardService: LeaderboardService) {} 

    async getLeaderBorder(_req: Request, res: Response): Promise<object> {
        const leaderboard = await this.leaderBoardService.getLeaderborder(homeOrTeam.teamHome);
        return res.status(200).json(leaderboard);
    }

    async getAwayLeaderBorder(_req: Request, res: Response): Promise<object> {
        const awayLeaderboard = await this.leaderBoardService.getLeaderborder(homeOrTeam.teamAway);
        return res.status(200).json(awayLeaderboard);
    }

    async generalHanking(_req: Request, res: Response): Promise<object> {
        const hanking = await this.leaderBoardService.generalRanking();
        return res.status(200).json(hanking);
    }
}
