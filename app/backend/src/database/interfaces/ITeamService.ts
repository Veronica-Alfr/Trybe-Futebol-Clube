import Team from "../models/teams";

export interface ITeamService {
    list(): Promise<Team[]>,
    listById(id: number): Promise<Team | null>,
}