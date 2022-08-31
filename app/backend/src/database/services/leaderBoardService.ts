import { ITeamsAndMatchs } from "../interfaces/ILeaderBoardService";
import Match from "../models/matches";
import Team from "../models/teams";

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
        const totalPoints = teams.map((team, index) => {
            const winnerOrNot = team.teamHome[index].homeTeamGoals > team.teamHome[index].awayTeamGoals ? 3 : 0
            const empate = team.teamHome[index].homeTeamGoals === team.teamHome[index].awayTeamGoals ? 1 : winnerOrNot;
            return winnerOrNot + empate;
        }); // fazer com redux

        return teams.map((team) => {
           return { name: team.teamName, totalPoints }
        });
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
