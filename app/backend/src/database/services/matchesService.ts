import { IMatchCreate } from "../interfaces/IMatchCreate";
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

    async create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchCreate): Promise<Match> {
        const matchCreate = await Match
        .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });

        return matchCreate;
    };

    async finish(id: number): Promise<void> {
        await Match.update({ inProgress: false }, { where: { id } });
    }
};