export interface IMatchGoalsAndTeamId {
    homeTeam: number, 
    awayTeam: number, 
    homeTeamGoals: number, 
    awayTeamGoals: number,
};

export interface IMatchGoals {
    homeTeamGoals: number, 
    awayTeamGoals: number,
};

export interface IMatchCreate {
    id: number,
    homeTeam: number, 
    awayTeam: number, 
    homeTeamGoals: number, 
    awayTeamGoals: number,
    inProgress: boolean
}