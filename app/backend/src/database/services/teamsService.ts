import { ITeamService } from "../interfaces/ITeamService";
import Team from "../models/teams";

export default class TeamService implements ITeamService {
    async list(): Promise<Team[]> {
        const allTeams = await Team.findAll();
        return allTeams;
    };

    async listById(id: number): Promise<Team | null> {
        const team = await Team.findByPk(id);

        if (!team) {
           const e = new Error('There is no team with such id!');
           e.name = 'NotFound';
           throw e;
        }

        return team;
    }
};