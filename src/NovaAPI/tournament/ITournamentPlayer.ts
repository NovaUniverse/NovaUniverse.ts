export default interface ITournamentPlayer {
	uid: number,
	has_nova_account: boolean,
	nova_account_name: string | null,
	username: string,
	uuid: string,
	team_number: number,
	score: number,
	kills: number
}