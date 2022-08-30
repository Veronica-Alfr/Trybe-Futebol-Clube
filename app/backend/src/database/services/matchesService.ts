import { IMatchService } from "../interfaces/IMatchService";
import Match from "../models/matches";

export default class MatchService implements IMatchService {
    async list(): Promise<Match[]> {
        const matches = await Match.findAll();
        return matches;
    };
};