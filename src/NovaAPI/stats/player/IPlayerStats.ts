import IDateTime from "../../interfaces/IDateTime";
import IPlayerSession from "./PlayerSession";

export default interface IPlayerStats {
	id: number,
	uuid: string,
	username: string,
	first_join_timestamp: IDateTime,
	last_join_timestamp: IDateTime,
	is_online: boolean,
	sessions: IPlayerSession[]
}