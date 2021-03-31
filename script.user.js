// ==UserScript==
// @name         TheZombsProject
// @namespace    https://github.com/eh7644/thezombsproject/
// @version      1.7.0
// @description  Instructions at the GitHub page on how to install and use it, aka https://github.com/eh7644/thezombsproject/blob/main/README.md
// @author       thezombsproject
// @match        zombs.io
// @require      https://github.com/eh7644/thezombsproject/raw/main/menu.user.js
// ==/UserScript==
const onEnterWorld = () => {
	window.onerror = function (e) {
		game.ui.getComponent("PopupOverlay")
			.showHint(`An error occoured: ${e}`, 5e3)
	};
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
window.SellWalls = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Wall") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellDoors = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Door") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellSlowTraps = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "SlowTrap") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellArrows = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "ArrowTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellCannons = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "CannonTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellBombs = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "BombTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellMages = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "MagicTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellMelees = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "MeleeTower") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellGoldMines = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "GoldMine") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.SellHarvesters = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Harvester") {
            Game.currentGame.network.sendRpc({
                name: "DeleteBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}


window.UpgradeWalls = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Wall") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeDoors = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Door") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeSlowTraps = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "SlowTrap") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}

window.UpgradeArrows = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "ArrowTower") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeCannons = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "CannonTower") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeBombs = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "BombTower") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeMages = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "MagicTower") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeMelees = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "MeleeTower") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeGoldMines = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "GoldMine") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
window.UpgradeHarvesters = function() {
    var entities = Game.currentGame.world.entities;
    for (var uid in entities) {
        if (!entities.hasOwnProperty(uid)) continue;

        var obj = entities[uid];
        if (obj.fromTick.model == "Harvester") {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: obj.fromTick.uid
            })
        }
    }
}
addEventListener('load', function (e) {
	document.querySelector('#scanallservsbtn')
		.addEventListener('click', scanServers);
	document.querySelector('#scanserverbtn')
		.addEventListener('click', scanServer);
	document.querySelector('#scanlbdatabtn')
		.addEventListener('click', scanPlayers);;
	document.querySelector('#scanplayernamesbtn')
		.addEventListener('click', scanPlayers)
});
