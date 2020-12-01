import HomePage from './../Home Page/home.js';
import TeamsPage from './../Teams page/teams.js'

let routes = {
    '*': () => {
        HomePage.render(updateMainContainer);
    },
    '/Games': () => {
        updateMainContainer('<h1>Games</h1>');
    },
    '/Standings': () => {
        updateMainContainer('<h1>Standings</h1>');
    },
    '/Teams': () => {
        updateMainContainer(TeamsPage.render());
    },
    '/Stats': () => {
        updateMainContainer('<h1>Stats</h1>');
    },
    '/Players': () => {
        updateMainContainer('<h1>Players</h1>');
    },
    '/Fantasy': () => {
        updateMainContainer('<h1>Fantasy</h1>');
    },

};

window.addEventListener("load", () => {
    var router = new Navigo(null, true, '#');
    router.on(routes).resolve();
})

function updateMainContainer(content) {
    var mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = content
}