import { ITeamsAndMatchs } from "../interfaces/ILeaderBoardService";
import Match from "../models/matches";
import Team from "../models/teams";
// import ILeaderBoard from '../interfaces/ILeaderBoard';

export default class LeaderBoardService {
    async getLeaderBorder() {
        const teams = await Team.findAll({ 
            include: 
              { model: Match, as: 'teamHome', where: { inProgress: false }}, 
                attributes: ['teamName']
        }) as unknown as ITeamsAndMatchs[];
        return this.calculateLeaderBorder(teams);
        // return teams;
    };

     calculateLeaderBorder(teams: ITeamsAndMatchs[]) {

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

            team.teamHome.reduce((acc, curr) => {
                acc.totalPoints += curr.homeTeamGoals > curr.awayTeamGoals ? 3 : 0;
                acc.totalPoints += curr.homeTeamGoals === curr.awayTeamGoals ? 1 : 0;

                acc.totalGames = team.teamHome.length;

                acc.totalVictories += curr.homeTeamGoals > curr.awayTeamGoals ? 1 : 0;

                acc.totalDraws += curr.homeTeamGoals === curr.awayTeamGoals ? 1 : 0;

                acc.totalLosses += curr.homeTeamGoals < curr.awayTeamGoals ? 1 : 0;

                const golsFavor = acc.goalsFavor += curr.homeTeamGoals;

                const golsOwn = acc.goalsOwn += curr.awayTeamGoals;

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

// - `Classificação`: Posição na classificação;
// - `Time`: Nome do time;
// - `P`: Total de Pontos;
// - `J`: Total de Jogos;
// - `V`: Total de Vitórias;
// - `E`: Total de Empates;
// - `D`: Total de Derrotas;
// - `GP`: Gols marcados a favor;
// - `GC`: Gols sofridos;
// - `SG`: Saldo total de gols;
// - `%`: Aproveitamento do time.
