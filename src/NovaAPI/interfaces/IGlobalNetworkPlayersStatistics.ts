import INetworkPlayerData from "./INetworkPlayerData";

export default interface IGlobalNetworkPlayersStatistics {
	total_joined: number;
	players: INetworkPlayerData[]
}