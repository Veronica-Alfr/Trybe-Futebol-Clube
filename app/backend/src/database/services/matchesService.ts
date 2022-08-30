import { IMatchService } from "../interfaces/IMatchService";
import Match from "../models/matches";
import Team from "../models/teams";

export default class MatchService implements IMatchService {
    async list(): Promise<Match[]> {
        const matches = await Match.findAll({ 
            include: 
            [
              { model: Team, as: 'teamHome', attributes: ['teamName'] }, 
              { model: Team, as: 'teamAway', attributes: ['teamName'] }
            ]
        });
        return matches;
    };

    async listInProgress(inProgress: boolean): Promise<Match[]> {
        const matchesInProgress = await Match.findAll({ 
            include: 
            [
              { model: Team, as: 'teamHome', attributes: ['teamName'] }, 
              { model: Team, as: 'teamAway', attributes: ['teamName'] }
            ],
            where: { inProgress }
        });
        return matchesInProgress;
    };
};