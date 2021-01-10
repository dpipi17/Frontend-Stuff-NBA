import SelectBox from './Custom Elements/selectBox.js'
import Roster from './roster.js'

export default class PlayersPage {

    static loadData(callback, team) {
        var teams = fetch('data/teams.json')
            .then(response => response.json());
        var roster = fetch("https://data.nba.net/json/cms/noseason/team/" + team + "/roster.json", {
                "method": "GET"
            })
            .then(response => response.json())

        Promise.all([teams, roster]).then((values) => {
            callback(values[0].teamsInfo, values[1].sports_content.roster.players.player);
        });
    }

    static render(callback, team = "lakers") {
        this.loadData((teamsInfo, roster) => {
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