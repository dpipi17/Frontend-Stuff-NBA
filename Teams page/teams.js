export default class TeamsPage {
    static loadAllTeams(page) {
        fetch("https://free-nba.p.rapidapi.com/teams?page=1", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "fbf1387fa8msh26b2f1fe23aa283p1a8647jsn299c3f039aa1",
                    "x-rapidapi-host": "free-nba.p.rapidapi.com"
                }
            })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.error(err);
            });
    }

    static render(params) {
        return `
            <div>
                rame
            </div>
        `
    }

    static after() {

    }
}