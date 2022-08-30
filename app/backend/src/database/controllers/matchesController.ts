import { Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService';

export default class MatchController {

  constructor(private matchService: IMatchService) { }

  async list(req: Request, res: Response): Promise<object> {
    const { inProgress } = req.query;

    const matches = await this.matchService.list();

    if (inProgress === undefined) {
      return res.status(200).json(matches);
    }

    const matchesInProgress = await this.matchService.listInProgress(inProgress === 'true');
    
    return res.status(200).json(matchesInProgress);
  };

  async create(req: Request, res: Response): Promise<object> {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      const e = new Error('It is not possible to create a match with two equal teams');
      e.name = 'Unauthorized';
      throw e;
    }

    const matchCreate = await this.matchService.create(req.body);

    return res.status(201).json(matchCreate);
  };
}