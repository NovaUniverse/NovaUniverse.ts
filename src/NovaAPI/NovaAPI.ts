import axios, { AxiosResponse } from "axios";
import IGlobalNetworkPlayersStatistics from "./interfaces/IGlobalNetworkPlayersStatistics";
import IProfile from "./interfaces/IProfile";
import IBasicStats from "./stats/IBasicStats";
import IDiscordStats from "./stats/IDiscordStats";
import IExtendedStats from "./stats/IExtendedStats";
import IPlayerStats from "./stats/player/IPlayerStats";
import PlayerSession from "./stats/player/PlayerSession";
import ISession from "./stats/session/ISession";
import ITournamentSession from "./tournament/TournamentSession";

export default class NovaAPI {
	public static shortUUIDToFull(uuid: string): string {
		return uuid.slice(0, 8) + "-" + uuid.slice(8, 12) + "-" + uuid.slice(12, 16) + "-" + uuid.slice(16, 20) + "-" + uuid.slice(20);
	}

	public static async getPlayerUUID(name: string): Promise<string | null> {
		try {
			let response = await axios.get("https://mojangapi.novauniverse.net/username_to_uuid/" + name);
			return response.data.uuid;
		} catch (err) {
		}

		return null;
	}

	public static async getPlayerProfile(uuid: string): Promise<IProfile | null> {
		try {
			let response = await axios.get("https://mojangapi.novauniverse.net/profile/" + uuid);
			return response.data;
		} catch (err) {
		}

		return null;
	}

	public static async getOnlinePlayers(): Promise<IGlobalNetworkPlayersStatistics> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/players/online/");

		return response.data;
	}

	public static async getMCFResults(): Promise<ITournamentSession[]> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/tournaments/mcf/result/");
		let data = response.data;

		let result: ITournamentSession[] = [];

		data.forEach((s: any) => {
			result.push(new ITournamentSession(s.id, s.date, s.display_name, s.winner_team_id, s.teams, s.players));
		});

		return result;
	}

	public static async getNovaGamesResults(): Promise<ITournamentSession[]> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/tournaments/nova_games/result/");
		let data = response.data;

		let result: ITournamentSession[] = [];
		
		data.forEach((s: any) => {
			result.push(new ITournamentSession(s.id, s.date, s.display_name, s.winner_team_id, s.teams, s.players));
		});

		return result;
	}

	public static async getUltrasharpResults(): Promise<ITournamentSession[]> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/tournaments/ultrasharp/result/");
		let data = response.data;

		let result: ITournamentSession[] = [];

		data.forEach((s: any) => {
			result.push(new ITournamentSession(s.id, s.date, s.display_name, s.winner_team_id, s.teams, s.players));
		});

		return result;
	}

	public static async connectivityCheck(): Promise<boolean> {
		try {
			let response = await axios.get("https://api.novauniverse.net/v1/connectivity_check/");

			return response.data.success;
		} catch (err) {
			return false;
		}
	}

	public static async getBasicStats(): Promise<IBasicStats> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/stats/basic/");

		return response.data;
	}

	public static async getExtendedStats(): Promise<IExtendedStats> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/stats/extended/");

		return response.data;
	}

	public static async getDiscordStats(): Promise<IDiscordStats> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/discord/");

		return response.data;
	}

	public static async getPlayerStats(uuid: string): Promise<IPlayerStats | null> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/stats/player/" + uuid);

		if (response.data.success === false) {
			return null;
		}

		let sessions: PlayerSession[] = [];

		response.data.data.sessions.forEach((e: any) => {
			sessions.push(new PlayerSession(e.game, e.session_id, e.total_places, e.player_placement, e.metadata, e.timestamp));
		});

		return {
			id: response.data.data.id,
			first_join_timestamp: response.data.data.first_join_timestamp,
			last_join_timestamp: response.data.data.last_join_timestamp,
			is_online: response.data.data.is_online,
			username: response.data.data.username,
			uuid: response.data.data.uuid,
			sessions: sessions
		};
	}

	public static async getSession(id: number): Promise<ISession | null> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/stats/session/by_id/" + id);

		if (response.data.success === false) {
			return null;
		}

		return response.data.data;
	}

	public static async getSessionList(): Promise<number[]> {
		let response: AxiosResponse = await axios.get("https://api.novauniverse.net/v1/novauniverse_mc/stats/session/all/");

		return response.data.data;
	}
}