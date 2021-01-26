import Team from './Custom Elements/team.js'
import Utils from './../js/utils.js'


export default class TeamsPage {

    static loadAllTeams(callback) {
        fetch("https://free-nba.p.rapidapi.com/teams?page=1", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "fbf1387fa8msh26b2f1fe23aa283p1a8647jsn299c3f039aa1",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            })
            .then(response => response.json())
            .then((json) => {
                callback(json);
            });
    }

    static getTeamComponents(data) {
        return data.map(team => `
            <my-team name="${team.full_name}"
                     imageSrc="${Utils.photo_links[team.abbreviation]}"
                     teamPage="${Utils.teams_page_links[team.abbreviation]}">
            </my-team>
        `);
    }

    static render(callback) {
        this.loadAllTeams((json) => {
            var content = `
                <div class="teams">
                    ${this.getTeamComponents(json.data).join(' ')}
                </div>
            `;
            callback(content);
        });
    }
}