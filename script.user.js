// ==UserScript==
// @name         TheZombsProject
// @namespace    https://github.com/eh7644/thezombsproject/
// @version      1.9.2
// @description  Instructions at the GitHub page on how to install and use it, aka https://github.com/eh7644/thezombsproject/blob/main/README.md
// @author       thezombsproject
// @match        zombs.io
// @require      https://github.com/eh7644/thezombsproject/raw/main/menu.user.js
// ==/UserScript==

let sellAllExcept = false;

const onEnterWorld = () => {
    window.addEventListener('error', function (e) {
        game.ui.getComponent("PopupOverlay")
            .showHint(`An error occoured: ${JSON.stringify(e)}`, 5e3)
        log(`Error, data: ${JSON.stringify(e)}`)
    });
}

game.network.addEnterWorldHandler(onEnterWorld);
let entities;
setInterval(() => {
    entities = game.world.entities;
}, 10)
var scanServers = function () {
    Object.values(game.options.servers)
        .forEach((item => {
        alert(JSON.stringify(item))
    }))
}

let wss = new WebSocket("wss://bolder-ribbon-cockatoo.glitch.me/");
serverObj = {};
wss.onmessage = (e) => {
    console.log(e);
    if (e.data.includes('"m":')) {
        serverObj = JSON.parse(e.data).m;
        for (let i = 0; i < document.getElementsByClassName("hud-intro-server")[0].length; i++) {
            let id = document.getElementsByClassName("hud-intro-server")[0][i].value;
            let target = serverObj[id].leaderboardDataObj.sort((a, b) => b.wave - a.wave)[0];
            document.getElementsByClassName("hud-intro-server")[0][i].innerText = `${game.options.servers[id].name}, ppl: ${serverObj[id].population / 3.125}, ${target.wave} <= ${target.name}`;
        }
    }
}

let alp = ["", "K", "M", "B", "T", "Q"];
let counter = (value = 0) => {
    return length = (value).toLocaleString().split(",").length - 1, v = (value / `1e${length * 3}`).toFixed(2) - "" + alp[length], n = !v ? "LIMIT" : isNaN(v - "") ? v: v - "";
};

find_1 = (targetName = "Player", findAll = false) => {
    let targets = {};
    let results = 0;
    Object.values(serverObj).forEach(server => {
        if (!server.leaderboardDataObj) return;
        server.leaderboardDataObj.forEach(result => {
            if (result.name.toLowerCase().includes(targetName.toLowerCase()) && !findAll) {
                targets[result.uid] = {server: server.id, name: result.name, wave: result.wave, score: result.score, uid: result.uid};
                results++;
            }
            if (findAll) {
                targets[result.uid] = {server: server.id, name: result.name, wave: result.wave, score: result.score, uid: result.uid};
                results++;
            }
        })
    })
    let sortedTargets = Object.values(targets).sort((a, b) => b.wave - a.wave);
    return [`All the results that includes ${targetName}, ${results}`, sortedTargets]
}

highestWave_1 = (moreOrEqualTo = 1000, lessOrEqualTo = Infinity) => {
    let targets = {};
    let results = 0;
    Object.values(serverObj).forEach(server => {
        if (!server.leaderboardDataObj) return;
        server.leaderboardDataObj.forEach(result => {
            if (result.wave >= moreOrEqualTo && result.wave <= lessOrEqualTo) {
                targets[result.uid] = {server: server.id, name: result.name, wave: result.wave, score: result.score, uid: result.uid};
                results++;
            }
        })
    })
    let sortedTargets = Object.values(targets).sort((a, b) => b.wave - a.wave);
    return [`All the results for waves more or equal to ${moreOrEqualTo} and less or equal to ${lessOrEqualTo}, ${results}`, sortedTargets]
}

highestScore_1 = (moreOrEqualTo = 1000000000, lessOrEqualTo = Infinity) => {
    let targets = {};
    let results = 0;
    Object.values(serverObj).forEach(server => {
        if (!server.leaderboardDataObj) return;
        server.leaderboardDataObj.forEach(result => {
            if (result.score >= moreOrEqualTo && result.score <= lessOrEqualTo) {
                targets[result.uid] = {server: server.id, name: result.name, wave: result.wave, score: result.score, uid: result.uid};
                results++;
            }
        })
    })
    let sortedTargets = Object.values(targets).sort((a, b) => b.score - a.score);
    return [`All the results for scores more or equal to ${moreOrEqualTo} and less or equal to ${lessOrEqualTo}, ${results}`, sortedTargets]
}

let scanByName = (name, scanEveryone = false) => {
    let result = find_1(name, scanEveryone)[0];
    let input = find_1(name, scanEveryone)[1];
    let data = result + ", {\n";
    for (let i in input) {
        let e = input[i];
        data += "    " + i + ", n: " + e.name + ", sid: " + e.server + ", w: " + counter(e.wave) + ", s: " + counter(e.score) + ",\n";
    }
    data += "}";
    document.getElementsByClassName("idk")[0].innerText = data;
}

let highestwave = (highest) => {
    let result = highestWave_1(highest)[0];
    let input = highestWave_1(highest)[1];
    let data = result + ", {\n";
    for (let i in input) {
        let e = input[i];
        data += "    " + i + ", n: " + e.name + ", sid: " + e.server + ", w: " + counter(e.wave) + ", s: " + counter(e.score) + ",\n";
    }
    data += "}";
    document.getElementsByClassName("idk")[0].innerText = data;
}

let highestscore = (highest) => {
    let result = highestScore_1(highest)[0];
    let input = highestScore_1(highest)[1];
    let data = result + ", {\n";
    for (let i in input) {
        let e = input[i];
        data += "    " + i + ", n: " + e.name + ", sid: " + e.server + ", w: " + counter(e.wave) + ", s: " + counter(e.score) + ",\n";
    }
    data += "}";
    document.getElementsByClassName("idk")[0].innerText = data;
}
let interval_1 = setInterval(() => {
    if (document.getElementsByClassName("scanpplbutton")[0]) {
        clearInterval(interval_1);
        document.getElementsByClassName("scanpplbutton")[0].onclick = () => {
            let value = document.getElementsByClassName("scanpplinput")[0].value;
            scanByName(value);
        }
        document.getElementsByClassName("highestwavebutton")[0].onclick = () => {
            let value = document.getElementsByClassName("scanpplinput2")[0].value;
            highestwave(value);
        }
        document.getElementsByClassName("highestscorebutton")[0].onclick = () => {
            let value = document.getElementsByClassName("scanpplinput3")[0].value;
            highestscore(value);
        }
    }
});
var scanServer = function () {
    var current = []
    Object.entries(game.ui.getComponent('Leaderboard')
                   .leaderboardData)
        .forEach((item => {
        current.push(item)
        alert(JSON.stringify(current) + "<br><br>")
    }))
    return JSON.stringify(current)
}
var scanPlayers = function () {
    var current = []
    Object.entries(game.ui.getComponent('Leaderboard')
                   .playerNames)
        .forEach((item => {
        current.push(item)
        alert(JSON.stringify(current) + "<br><br>")
    }))
    return JSON.stringify(current)
}
var leaderboardData = function () {
    var current = []
    Object.entries(game.ui.components.Leaderboard.leaderboardData)
        .forEach((item => {
        current.push(item)
        alert(JSON.stringify(current) + "<br><br>")
    }))
    return JSON.stringify(current)
}

const log = msg => {
    let logElem = document.createElement('div')
    logElem.innerHTML = `<br>${msg}`
    logElem.class = "tzpLogDiv"
    document.querySelector('#activitylogs').append(logElem)
}

const sell = type => {
    var SellArrows = function () {
        for (var uid in entities) {
            if (!entities.hasOwnProperty(uid)) continue;
            var obj = entities[uid];
            if (obj.fromTick.model == type) {
                Game.currentGame.network.sendRpc({
                    name: "DeleteBuilding",
                    uid: obj.fromTick.uid
                })
            }
        }
    }
    game.ui.getComponent("PopupOverlay")
        .showHint(`Sold ${type}s`, 3e3);
    log('Sold towers with building type {[' + type + ']}')
}
const upgrade = type => {
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;
        var obj = entities[uid]
        if (obj.fromTick.model == type) {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
    log('Upgraded towers with building type ' + type)
}

const sellAllBut = type => {
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;
        var obj = entities[uid]
        if (obj.fromTick.model !== type) {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
    log('Sold all but towers with building type ' + type)
}

const upgradeAllBut = type => {
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;
        var obj = entities[uid]
        if (obj.fromTick.model !== type) {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
    log('Upgraded all but towers with building type ' + type)
}

const cfp = [{
    path: "sellwallsbtn",
    function: () => {
        sell("Wall")
    }
}, {
    path: "selldoorsbtn",
    function: () => {
        sell("Door")
    }
}, {
    path: "sellmagesbtn",
    function: () => {
        sell("MagicTower")
    }
}, {
    path: "sellmeleesbtn",
    function: () => {
        sell("MeleeTower")
    }
}, {
    path: "sellminesbtn",
    function: () => {
        sell("GoldMine")
    }
}, {
    path: "sellbombsbtn",
    function: () => {
        sell("BombTower")
    }
}, {
    path: "sellarrowsbtn",
    function: () => {
        sell("ArrowTower")
    }
}, {
    path: "sellcannonsbtn",
    function: () => {
        sell("CannonTower")
    }
}, {
    path: "sellharvsbtn",
    function: () => {
        sell("Harvester")
    }
}, {
    path: "upwallsbtn",
    function: () => {
        upgrade("Wall")
    }
}, {
    path: "updoorsbtn",
    function: () => {
        upgrade("Door")
    }
}, {
    path: "upmagesbtn",
    function: () => {
        upgrade("MagicTower")
    }
}, {
    path: "upmeleesbtn",
    function: () => {
        upgrade("MeleeTower")
    }
}, {
    path: "upminesbtn",
    function: () => {
        upgrade("GoldMine")
    }
}, {
    path: "upbombsbtn",
    function: () => {
        upgrade("BombTower")
    }
}, {
    path: "uparrowsbtn",
    function: () => {
        upgrade("ArrowTower")
    }
}, {
    path: "upcannonsbtn",
    function: () => {
        upgrade("CannonTower")
    }
}, {
    path: "upharvsbtn",
    function: () => {
        upgrade("Harvester")
    }
}]

addEventListener('load', function (e) {
    document.querySelector('#scanallservsbtn')
        .addEventListener('click', scanServers);
    document.querySelector('#scanserverbtn')
        .addEventListener('click', scanServer);
    document.querySelector('#scanlbdatabtn')
        .addEventListener('click', scanPlayers);;
    document.querySelector('#scanplayernamesbtn')
        .addEventListener('click', scanPlayers)
    cfp.forEach((objc => {
        document.querySelector(`#${objc.path}`)
            .addEventListener('click', objc.function);
    }));
    log('Initialized script')
    document.querySelector('#sellallbutchk').addEventListener('change', function() {
        sellAllExcept = this.checked;
    })
});
