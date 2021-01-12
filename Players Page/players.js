import SelectBox from './Custom Elements/selectBox.js'
import Roster from './roster.js'

export default class PlayersPage {

    static loadData(callback, team) {
        var teams = fetch('data/teams.json')
            .then(response => response.json());
        var players = fetch('https://data.nba.net/prod/v1/2020/players.json')
            .then(response => response.json());

        Promise.all([teams, players]).then((values) => {
            callback(values[0].teamsInfo, values[1].league.standard);
        });
    }

    static render(callback, team = "lakers") {
        this.loadData((teamsInfo, players) => {
            let roster = players.filter(player => player.teamId == teamsInfo[team].teamId)
            let content = `
                <div class="players">
                    <div class="comboBoxContainer">
                        <my-select-box value="${team}" 
                                    posibleValues=${encodeURIComponent(JSON.stringify(teamsInfo))}
                                    text="Choose Team"> </my-select-box>
                    </div>


                    <div class="rostercontainer">
                        ${Roster.render(roster, teamsInfo[team])}
                    </div>
                </div>
            `;

            callback(content);
        }, team);
    }
}