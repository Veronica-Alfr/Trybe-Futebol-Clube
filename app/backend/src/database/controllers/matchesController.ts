import { Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService';

export default class MatchController {

  constructor(private matchService: IMatchService) { }

  async list(_req: Request, res: Response): Promise<object> {
    const matches = await this.matchService.list();
    return res.status(200).json(matches);
  }
}