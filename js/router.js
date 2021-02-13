import HomePage from './../Home Page/home.js';
import ArticlePage from './../Article Page/articlePage.js'
import TeamsPage from './../Teams page/teams.js'
import StandingPage from './../Standing Page/standing.js'
import GamesPage from './../Games Page/games.js'
import PlayersPage from './../Players Page/players.js'
import PlayerPage from './../Player Page/player.js'
import ComparePage from './../Compare Page/compare.js'

let routes = {
    '*': () => {
        HomePage.render(updateMainContainer);
    },
    '/Article/:articleId': (params) => {
        ArticlePage.render(updateMainContainer, params.articleId);
    },
    '/Games': () => {
        GamesPage.render(updateMainContainer, GamesPage.dateToGameDate(new Date()))
    },
    '/Games/:gameDate': (params) => {
        GamesPage.render(updateMainContainer, params.gameDate)
    },
    '/Standings': () => {
        StandingPage.render(updateMainContainer);
    },
    '/Teams': () => {
        TeamsPage.render(updateMainContainer);
    },
    '/Players': () => {
        PlayersPage.render(updateMainContainer);
    },
    '/Players/:team': (params) => {
        PlayersPage.render(updateMainContainer, params.team);
    },
    '/Player/:playerId': (params) => {
        PlayerPage.render(updateMainContainer, params.playerId);
    },
    '/Compare': (params, query) => {
        let queryObj = parseQuery(query);
        let comparePage = new ComparePage(queryObj['type'], queryObj['firstId'], queryObj['secondId']);
        comparePage.render(updateMainContainer)
    }
};

// window.addEventListener("load", () => {
//     var router = new Navigo(null, true, '#');
//     router.on(routes).resolve();
// })

let handleRouting = () => {
    let currentUri = window.location.hash || false;
    if (currentUri !== false) {
        currentUri = currentUri.substring(1);
    }
    routes[currentUri || '*']();
};

window.addEventListener('load', handleRouting);

window.addEventListener('hashchange', handleRouting);

function updateMainContainer(content) {
    var mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = content
    window.scrollTo(0, 0);
}

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}