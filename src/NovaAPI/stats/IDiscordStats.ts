export default interface IDiscordStats {
	member_count: IMemberCount
}

export interface IMemberCount {
	total: number,
	bots: number
}