import teamNameRow from './Custom Elements/teamNameRow.js'
import TeamsPage from './../Teams page/teams.js'

export default class ConferenceStanding {

    static renderHeader() {
        return `
            <tr class="table_header">
              <th>TEAM</th>
              <th>W</th>
              <th>L</th>
              <th>WIN%</th>
              <th>GB</th>
              <th>CONF</th>
              <th class="hide">DIV</th>
              <th class="hide">HOME</th>
              <th class="hide">ROAD</th>
              <th class="hide">LAST 10</th>
              <th class="hide">STREAK</th>
            </tr>
        `;
    }

    static renderRow(teamData) {
        return `
          <tr class='standing_row'>
            <td>
              <my-team-row name="${teamData.teamSitesOnly.teamKey} ${teamData.teamSitesOnly.teamNickname}"
                           rank="${teamData.confRank}"
                           imageSrc="${TeamsPage.photo_links[teamData.teamSitesOnly.teamTricode]}"
                           teamPage="${TeamsPage.teams_page_links[teamData.teamSitesOnly.teamTricode]}"> 
              </my-team-row>
            </td>
            <td>${teamData.win}</td>
            <td>${teamData.loss}</td>
            <td>${teamData.winPct}</td>
            <td>${teamData.gamesBehind}</td>
            <td>${teamData.confWin}-${teamData.confLoss}</td>
            <td class="hide">${teamData.divWin}-${teamData.divLoss}</td>
            <td class="hide">${teamData.homeWin}-${teamData.homeLoss}</td>
            <td class="hide">${teamData.awayWin}-${teamData.awayLoss}</td>
            <td class="hide">${teamData.lastTenWin}-${teamData.lastTenLoss}</td>
            <td class="hide">${teamData.teamSitesOnly.streakText}</td>
          </tr>
        `;
    }

    static render(conferenceJson, conferenceName) {
        console.log(conferenceJson[0]);
        return `    
          <div class="conference_standing">
            <h2>${conferenceName}</h2>
            <table class="table">
              ${this.renderHeader()}
              ${conferenceJson.map(x => this.renderRow(x)).join(' ')}
            </table>
          </div>
        `;
    }
}