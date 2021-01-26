import Utils from './../js/utils.js'

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
                    <img class="team_logo" src="${Utils.getTeamLogoImage(playerProfile.teamId)}" alt=""></img>
                    <img class="profile_img" src="${Utils.getPlayerImageSrc(playerProfile.personId)}" alt=""></img>
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

            <div class="top_stats">
                <div class="main_stats">
                    <div class="main_stat">
                        MPG
                        <br>
                        ${playerStats.latest.mpg}
                    </div>
                    <div class="main_stat">
                        PPG
                        <br>
                        ${playerStats.latest.ppg}
                    </div>
                    <div class="main_stat">
                        RPG
                        <br>
                        ${playerStats.latest.rpg}
                    </div>
                    <div class="main_stat">
                        APG
                        <br>
                        ${playerStats.latest.apg}
                    </div>
                    <div class="main_stat">
                        SPG
                        <br>
                        ${playerStats.latest.spg}
                    </div>
                    <div class="main_stat">
                        BPG
                        <br>
                        ${playerStats.latest.bpg}
                    </div>
                </div>

                <div class="infos">                    
                    <div class="info">
                        HEIGHT 
                        <br>
                        ${playerProfile.heightFeet}'${playerProfile.heightInches}" (${playerProfile.heightMeters}m)
                    </div>
                    <div class="info">
                        WEIGHT 
                        <br>
                        ${playerProfile.weightPounds}lb (${playerProfile.weightKilograms}kg)
                    </div>
                    <div class="info">
                        COUNTRY 
                        <br>
                        ${playerProfile.country}
                    </div>
                    <div class="info hide">
                        LAST ATTENDED
                        <br>
                        ${playerProfile.lastAffiliation}
                    </div>
                    <div class="info">
                        College 
                        <br>
                        ${playerProfile.collegeName}
                    </div>
                    <div class="info hide">
                        DRAFT 
                        <br>
                        ${playerProfile.draft.seasonYear} R${playerProfile.draft.roundNum} Pick ${playerProfile.draft.pickNum}
                    </div>
                    <div class="info hide_second">
                        EXPERIENCE 
                        <br>
                        ${playerProfile.yearsPro} Years
                    </div>            
                </div>
            </div>
        `;
    }

    static render(callback, playerId) {
        this.loadData((teamsInfo, playerStats, players) => {
            var team = this.getTeamWithTeamId(teamsInfo, playerStats.teamId);
            var playerProfile = players.find(player => player.personId == playerId);
            let content = `
                <div class="player">
                    <div class="top_part" style="background-color: ${team.primaryColor};">
                        ${this.renderTopPart(team, playerProfile, playerStats.stats)}
                    </div>
                </div>
            `;

            callback(content);

            document.querySelector(".btn").addEventListener("click", () => {
                window.location = '#/Compare?type=players&firstId=' + playerId + "&secondId="
            });
        }, playerId);
    }
}