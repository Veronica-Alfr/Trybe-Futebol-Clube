import { IService } from "../interfaces/IService";
import Team from "../models/teams";

export default class TeamService implements IService<Team>{
    async list(): Promise<Team[]> {
        const allTeams = await Team.findAll();
        return allTeams;
    };
};