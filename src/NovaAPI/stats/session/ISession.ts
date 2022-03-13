import IDateTime from "../../interfaces/IDateTime";
import IGame from "../../interfaces/IGame";

export default interface ISession {
	game: IGame,
	session_id: number,
	metadata: string | null,
	total_places: number,
	timestamp: IDateTime,
	players: ISessionPlayerData,
}

export interface ISessionPlayerData {
	player: ISessionPlayer,
	placement: number
}

export interface ISessionPlayer {
	player_id: number,
	uuid: string,
	username: string
}