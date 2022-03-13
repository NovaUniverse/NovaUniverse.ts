export default interface IExtendedStats {
	global: IGlobalExtendedStats,
	player_preview: IGlobalPlayerPreview,
	servers: IServerStats[],
	cached: boolean
}

export interface IGlobalExtendedStats {
	player_count: number,
	server_count: number
}

export interface IGlobalPlayerPreview {
	max_preview_items: number,
	content: IPlayerPlayer[],
	additional: number
}

export interface IPlayerPlayer {
	uuid: string,
	username: string
}

export interface IServerStats {
	id: number,
	name: string,
	display_name: string,
	player_counbt: number,
	server_count: number,
	max_preview_players: number,
	available: boolean,
	player_preview: IPlayerPlayer[]
}