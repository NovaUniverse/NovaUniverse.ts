import NovaAPI from "./NovaAPI/NovaAPI";
import TournamentSession from "./NovaAPI/tournament/TournamentSession";


async function test() {
	console.log("Connectivity check");
	console.log(await NovaAPI.connectivityCheck());

	console.log("Get UUID of Zeeraa01Fake");
	let uuidFail = await NovaAPI.getPlayerUUID("Zeeraa01Fake");
	console.log(uuidFail);

	console.log("Get UUID of Zeeraa01");
	let uuid = await NovaAPI.getPlayerUUID("Zeeraa01");
	console.log(uuid);

	console.log("Get profile of Zeeraa01:");
	let profile = await NovaAPI.getPlayerProfile(uuid);
	console.log(profile);

	console.log("UUID to full:");
	console.log(NovaAPI.shortUUIDToFull(profile.id));

	console.log("Online players:");
	let online = await NovaAPI.getOnlinePlayers();
	console.log(online);

	console.log("MCF Result:");
	let mcfResult: TournamentSession[] = await NovaAPI.getMCFResults();
	console.log(mcfResult);

	console.log("First MCF week:");
	let mcfFirstWeek = mcfResult[0];
	console.log(mcfFirstWeek);

	console.log("Winning team:");
	console.log(mcfFirstWeek.getWinnerTeam());

	console.log("Winning players:");
	console.log(mcfFirstWeek.getWinners());

	console.log("Basic stats:");
	console.log(await NovaAPI.getBasicStats());

	console.log("Extended stats:");
	console.log(await NovaAPI.getExtendedStats());

	console.log("Discord stats:");
	console.log(await NovaAPI.getDiscordStats());

	console.log("Session list:");
	console.log(await NovaAPI.getSessionList());

	console.log("Session 100:");
	console.log(await NovaAPI.getSession(100));

	console.log("Player stats of Zeeraa01:");
	let zeeraa01stats = await NovaAPI.getPlayerStats(uuid);
	console.log(zeeraa01stats);

	console.log("Zeeraa01's first session:");
	console.log(await zeeraa01stats.sessions[0].getFullSessionData());

	console.log("NovaGames stats:");
	console.log(await NovaAPI.getNovaGamesResults());

	console.log("Ultrasharp stats:");
	console.log(await NovaAPI.getUltrasharpResults());

}

test();