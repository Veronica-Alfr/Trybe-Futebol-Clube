import { Request, Response } from 'express';
import { IMatchService } from '../interfaces/IMatchService';
import { ITeamService } from '../interfaces/ITeamService';

export default class MatchController {

  constructor(private matchService: IMatchService, private teamService: ITeamService) { }

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

    await this.teamService.listById(homeTeam) // awayTeam não funciona nesse caso, pois é uma filha/foreign key

    const matchCreate = await this.matchService.create(req.body);

    return res.status(201).json(matchCreate);
  };

  async finish(req: Request, res: Response): Promise<object> {
    const { id } = req.params;

    await this.matchService.finish(Number(id));

    return res.status(200).json('Finished');
  }

  async changeMatchResult(req: Request, res: Response): Promise<object> {
    const { id } = req.params;

    await this.matchService.changeMatchResult(Number(id), req.body);

    return res.status(200).json('The match goals values have been successfully changed!');
  }
}