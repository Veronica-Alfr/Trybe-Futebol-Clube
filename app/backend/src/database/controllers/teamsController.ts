import { Request, Response } from 'express';
import { ITeamService } from '../interfaces/ITeamService';
// import Team from '../models/teams';

export default class TeamController {

  constructor(private teamService: ITeamService) { }

  async list(_req: Request, res: Response): Promise<object> {
    const teams = await this.teamService.list();
    return res.status(200).json(teams);
  }

  async listById(req: Request, res: Response): Promise<object> {
    const { id } = req.params;
    const team = await this.teamService.listById(Number(id));
    return res.status(200).json(team);
  }
}