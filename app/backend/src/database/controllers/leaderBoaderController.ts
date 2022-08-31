import LeaderBoardService from "../services/leaderBoardService";
import { Request, Response } from 'express';

export default class LeaderBoardController {
    constructor(private leaderBoardService: LeaderBoardService) {} 

    async getLeaderBorder(_req: Request, res: Response): Promise<object> {
        const namesMatch = await this.leaderBoardService.getLeaderBorder();
        return res.status(200).json(namesMatch);
    }
}