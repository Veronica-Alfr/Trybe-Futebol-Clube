import { goals, homeOrTeam } from "../interfaces/Enum";
import { ITeamsAndMatchs } from "../interfaces/ILeaderboardService";
import Match from "../models/matches";
import Team from "../models/teams";

export default class LeaderboardService {
    async getLeaderborder(alias: homeOrTeam) {
        const teams = await Team.findAll({
            include: 
              { model: Match, as: alias, where: { inProgress: false }}, 
                attributes: ['teamName']
        }) as unknown as ITeamsAndMatchs[];
        return this.calculateLeaderBorder(teams, alias);
    };

     calculateLeaderBorder(teams: ITeamsAndMatchs[], alias: homeOrTeam) {

        const totalPoints = teams.map((team) => {
            const initialsValuesLeaderBoard = {
                name: team.teamName,
                totalPoints: 0,
                totalGames: 0,
                totalVictories: 0,
                totalDraws: 0,
                totalLosses: 0,
                goalsFavor: 0,
                goalsOwn: 0,
                goalsBalance: 0,
                efficiency: '0.00',
            };

            team[alias].reduce((acc: any, curr: any) => {
                const homeGoalsOrTeamsGoals = goals[alias] === 'homeTeamGoals' ? 'awayTeamGoals' : 'homeTeamGoals';
                acc.totalPoints += curr[goals[alias]] > curr[homeGoalsOrTeamsGoals] ? 3 : 0;
                acc.totalPoints += curr[goals[alias]] === curr[homeGoalsOrTeamsGoals] ? 1 : 0;

                acc.totalGames = team[alias].length;

                acc.totalVictories += curr[goals[alias]] > curr[homeGoalsOrTeamsGoals] ? 1 : 0;

                acc.totalDraws += curr[goals[alias]] === curr[homeGoalsOrTeamsGoals] ? 1 : 0;

                acc.totalLosses += curr[goals[alias]] < curr[homeGoalsOrTeamsGoals] ? 1 : 0;

                const golsFavor = acc.goalsFavor += curr[goals[alias]];

                const golsOwn = acc.goalsOwn += curr[homeGoalsOrTeamsGoals];

                acc.goalsBalance = golsFavor - golsOwn;

                const efficiency = acc.totalPoints/(acc.totalGames*3)*100;
                acc.efficiency = efficiency.toFixed(2);

            return acc;
                }, initialsValuesLeaderBoard);

            return initialsValuesLeaderBoard;
        }); 
        return totalPoints.sort((a, b) => b.totalPoints - a.totalPoints || 
        b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance ||
        b.goalsFavor - a.goalsFavor || b.goalsOwn - a.goalsOwn);
    }
}
