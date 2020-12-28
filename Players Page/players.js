import SelectBox from './Custom Elements/selectBox.js'

export default class PlayersPage {

    static loadData(callback, team) {
        var teams = fetch('data/teams.json')
            .then(response => response.json());
        var roster = fetch("http://data.nba.net/json/cms/noseason/team/" + team + "/roster.json", {
                "method": "GET"
            })
            .then(response => response.json())

        Promise.all([teams, roster]).then((values) => {
            callback(values[0].teams, values[1].sports_content.roster.players.player);
        });
    }

    static renderRoster(roster) {
        return `
            ${roster.map(player => "<h2>" + player.display_name + "</h2>").join(' ')}
        `;
    }

    static render(callback, team = "lakers") {
        this.loadData((teams, roster) => {
            console.log(teams);
            console.log(roster);
            let content = `
                <div class="players">
                    <div class="comboBoxContainer">
                        <my-select-box value="${team}" 
                                    posibleValues=${encodeURIComponent(JSON.stringify(teams))}
                                    text="Choose Team"> </my-select-box>
                    </div>


                    <div class="roster">
                        ${this.renderRoster(roster)}
                    </div>
                </div>
            `;

            callback(content);
        }, team);
    }
}