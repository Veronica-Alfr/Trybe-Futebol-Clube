import Match from "../models/matches";

export interface IMatchService {
    list(): Promise<Match[]>,
    listInProgress(inProgress: boolean): Promise<Match[]>,
}