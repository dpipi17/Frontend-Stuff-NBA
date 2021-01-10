import TeamsPage from './../Teams page/teams.js'

export default class Roster {

    static renderHeader() {
        return `
            <thead>
                <tr>
                    <th>PLAYER</th>
                    <th>NUMBER</th>
                    <th>POSITION</th>
                    <th>HEIGHT</th>
                    <th>WEIGHT</th>
                    <th class="hide">BIRTH YEAR</th>
                    <th class="hide">COUNTRY</th>
                </tr>
            </thead>
        `;
    }

    static renderRow(player) {
        return `
                <tr class="roster_row">
                    <td>
                        <a href="#/Player/${player.person_id}" class="player_field">
                            <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/${player.person_id}.png" alt=""></img>
                            <p>${player.display_name}</p>
                        </a>
                    </td>
                    <td>${player.jersey_number}</td>
                    <td>${player.position_short}</td>
                    <td>${player.height_ft}-${player.height_in}</td>
                    <td>${player.weight_lbs} lbs</td>
                    <td class="hide">${player.birth_date.substring(0, 4)}</td>
                    <td class="hide">${player.elias_country}</td>
                </tr>  
        `;
    }

    static render(roster, teamInfo) {
        return `    
          <div class="roster">

            <a href="${TeamsPage.teams_page_links[teamInfo.triCode]}" class="rosterHeaderContainer">
                <img src="${TeamsPage.photo_links[teamInfo.triCode]}"></img>
                <h2>${teamInfo.displayName}</h2>
            </a>
            <table class="styled-table">
              ${this.renderHeader()}

              <tbody>
                ${roster.map(player => this.renderRow(player)).join(' ')}
              </tbody>
            </table>
          </div>
        `;
    }
}