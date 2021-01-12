export default class PlayerPage {

    static getTeamWithTeamId(teamsInfos, teamId) {
        for (const [key, team] of Object.entries(teamsInfos)) {
            if (team.teamId == teamId) {
                return team;
            }
        }
        return null;
    }

    static loadData(callback, playerId) {
        var teamsInfo = fetch('data/teams.json')
            .then(response => response.json());

        var playerProfile = fetch("http://data.nba.net/prod/v1/2020/players/" + playerId + "_profile.json", {
                "method": "GET"
            })
            .then(response => response.json())

        Promise.all([teamsInfo, playerProfile]).then((values) => {
            callback(values[0].teamsInfo, values[1].league.standard);
        });
    }

    static render(callback, playerId) {
        this.loadData((teamsInfo, playerProfile) => {
            var team = this.getTeamWithTeamId(teamsInfo, playerProfile.teamId);
            console.log(this.getTeamWithTeamId(teamsInfo, playerProfile.teamId));
            let content = `
                <div class="player" style="background-color: ${team.primaryColor};">
                    <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png" alt=""></img>
                    <img src=" https://cdn.nba.com/logos/nba/${playerProfile.teamId}/global/L/logo.svg" alt=""></img>
                </div>
            `;

            callback(content);
        }, playerId);
    }
}