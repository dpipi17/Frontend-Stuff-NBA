import Utils from './../js/utils.js'

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
                        <a href="#/Player/${player.personId}" class="player_field">
                            <img src="${Utils.getPlayerImageSrc(player.personId)}" alt=""></img>
                            <p>${player.temporaryDisplayName}</p>
                        </a>
                    </td>
                    <td>${player.jersey}</td>
                    <td>${player.pos}</td>
                    <td>${player.heightFeet}-${player.heightInches}</td>
                    <td>${player.weightPounds} lbs</td>
                    <td class="hide">${player.dateOfBirthUTC.substring(0, 4)}</td>
                    <td class="hide">${player.country}</td>
                </tr>  
        `;
    }

    static render(roster, teamInfo) {
        return `    
          <div class="roster">

            <a href="${Utils.teams_page_links[teamInfo.triCode]}" class="rosterHeaderContainer">
                <img src="${Utils.photo_links[teamInfo.triCode]}"></img>
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