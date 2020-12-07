import ConferenceStanding from './conferenceStanding.js'

export default class StandingPage {

    static loadConferenceStandings(callback) {
        fetch("http://data.nba.net/prod/v1/current/standings_conference.json", {
                "method": "GET"
            })
            .then(response => response.json())
            .then((json) => {
                callback(json.league.standard.conference.east, json.league.standard.conference.west);
            });
    }

    static render(callback) {
        this.loadConferenceStandings((east, west) => {
            var content = `
                <div class="standings">
                    ${ConferenceStanding.render(east, 'Eastern Conference')}
                    ${ConferenceStanding.render(west, 'Western Conference')}
                </div>
            `;
            callback(content);
        });
    }
}