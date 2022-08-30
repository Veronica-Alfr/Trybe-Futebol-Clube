import Match from "../models/matches";
import { IMatchCreate } from "./IMatchCreate";

export interface IMatchService {
    list(): Promise<Match[]>,
    listInProgress(inProgress: boolean): Promise<Match[]>,
    create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchCreate): Promise<Match>,
    finish(id: number): Promise<void>,
}