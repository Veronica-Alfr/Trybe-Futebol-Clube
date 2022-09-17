export interface ITeamsAndMatchs {
    teamName: string,
    teamHome: IMatchsOfTeam[],
    teamAway: IMatchsOfTeam[]
};

export interface IMatchsOfTeam {
    id: number,
    homeTeam: number,
    homeTeamGoals: number,
    awayTeam: number,
    awayTeamGoals: number,
    inProgress: boolean
}
