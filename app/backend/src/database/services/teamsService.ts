import { IService } from "../interfaces/IService";
import Team from "../models/teams";

export default class TeamService implements IService<Team>{
    async list(): Promise<Team[]> {
        const allTeams = await Team.findAll();
        return allTeams;
    };

    async listById(id: number): Promise<Team | null> {
        const team = await Team.findByPk(id);
        return team;
    }
};