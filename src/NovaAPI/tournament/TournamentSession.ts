import ITournamentPlayer from "./ITournamentPlayer";
import ITournamentTeam from "./ITournamentTeam";

export default class TournamentSession {
	public id: number;
	public date: string;
	public display_name: string;
	public winner_team_id: number;
	public teams: ITournamentTeam[];
	public players: ITournamentPlayer[];

	constructor(id: number, date: string, display_name: string, winner_team_id: number, teams: ITournamentTeam[], players: ITournamentPlayer[]) {
		this.id = id;
		this.date = date;
		this.display_name = display_name;
		this.winner_team_id = winner_team_id;
		this.teams = teams;
		this.players = players;
	}

	public getWinnerTeam(): ITournamentTeam {
		return this.teams.find(team => team.team_number == this.winner_team_id);
	}

	public getWinners(): ITournamentPlayer[] {
		return this.players.filter(player => player.team_number == this.winner_team_id);
	}
}