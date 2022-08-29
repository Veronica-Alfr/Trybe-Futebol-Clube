import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import Team from '../models/teams';

export default class TeamController {

  constructor(private teamService: IService<Team>) { }

  async list(_req: Request, res: Response): Promise<object> {
    const teams = await this.teamService.list();
    return res.status(200).json(teams);
  }
}