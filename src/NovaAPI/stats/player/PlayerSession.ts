import NovaAPI from "../../NovaAPI";
import IDateTime from "../../interfaces/IDateTime";
import IGame from "../../interfaces/IGame";
import ISession from "../session/ISession";

export default class PlayerSession {
	public game: IGame;
	public session_id: number;
	public total_places: number;
	public player_placement: number;
	public metadata: string | null;
	public timestamp: IDateTime;

	constructor(game: IGame, session_id: number, total_places: number, player_placement: number, metadata: string | null, timestamp: IDateTime) {
		this.game = game;
		this.session_id = session_id;
		this.total_places = total_places;
		this.player_placement = player_placement;
		this.metadata = metadata;
		this.timestamp = timestamp;
	}

	public async getFullSessionData(): Promise<ISession> {
		return await NovaAPI.getSession(this.session_id);
	}
}