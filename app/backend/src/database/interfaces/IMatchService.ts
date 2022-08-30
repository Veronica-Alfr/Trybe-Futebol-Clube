import Match from "../models/matches";
import { IMatchBody } from "./IMatchBody";

export interface IMatchService {
    list(): Promise<Match[]>,
    listInProgress(inProgress: boolean): Promise<Match[]>,
    create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchBody): Promise<Match>,
    finish(id: number): Promise<void>,
    changeMatchResult(id: number, { homeTeamGoals, awayTeamGoals }: IMatchBody): Promise<void>,
}