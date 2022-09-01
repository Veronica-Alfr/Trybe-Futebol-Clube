import Match from "../models/matches";
// import { IMatch } from "./IMatch";
import { IMatchGoalsAndTeamId, IMatchGoals  } from "./IMatchBody";

export interface IMatchService {
    list(): Promise<Match[]>,
    listInProgress(inProgress: boolean): Promise<Match[]>,
    create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchGoalsAndTeamId ): Promise<Match>,
    finish(id: number): Promise<void>,
    changeMatchResult(id: number, { homeTeamGoals, awayTeamGoals }: IMatchGoals): Promise<void>,
}