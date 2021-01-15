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

        var playerStats = fetch("https://data.nba.net/prod/v1/2020/players/" + playerId + "_profile.json", {
                "method": "GET"
            })
            .then(response => response.json())

        var players = fetch('data/players.json')
            .then(response => response.json());

        Promise.all([teamsInfo, playerStats, players]).then((values) => {
            callback(values[0].teamsInfo, values[1].league.standard, values[2]);
        });
    }

    static renderTopPart(team, playerProfile, playerStats) {
        return `
            <div class="profile_container">
                <div class="imgs_container">
                    <img class="team_logo" src=" https://cdn.nba.com/logos/nba/${playerProfile.teamId}/global/L/logo.svg" alt=""></img>
                    <img class="profile_img" src="https://cdn.nba.com/headshots/nba/latest/1040x760/${playerProfile.personId}.png" alt=""></img>
                </div>

                <div class="profile_info_container"> 
                    <p>${team.displayName} | #${playerProfile.jersey} | ${playerProfile.teamSitesOnly.posFull}</p>
                    <div class="name">
                        ${playerProfile.firstName}
                        <br>
                        ${playerProfile.lastName}
                    </div>
                    <button class="btn">Compare</button>
                </div>
            </div>
        `;
    }

    static render(callback, playerId) {
        this.loadData((teamsInfo, playerStats, players) => {
            var team = this.getTeamWithTeamId(teamsInfo, playerStats.teamId);
            var playerProfile = players.find(player => player.personId == playerId);
            console.log(playerProfile);
            console.log(team);
            let content = `
                <div class="player">
                    <div class="top_part" style="background-color: ${team.primaryColor};">
                        ${this.renderTopPart(team, playerProfile, playerStats)}
                    </div>
                </div>
            `;

            callback(content);
        }, playerId);
    }
}