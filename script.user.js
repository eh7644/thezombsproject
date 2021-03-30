// ==UserScript==
// @name         TheZombsProject
// @namespace    https://github.com/eh7644/thezombsproject/
// @version      1.0.0
// @description  Instructions at the GitHub page on how to install and use it, aka https://github.com/eh7644/thezombsproject/blob/main/README.md
// @author       thezombsproject
// @match        zombs.io
// @require      https://github.com/eh7644/thezombsproject/raw/main/menu.user.js
// ==/UserScript==

let entities;

setInterval(() => {
  entities = game.world.entities;
}, 10)

var scanServers = function() {
  Object.values(game.options.servers).forEach((item => {
    alert(JSON.stringify(item))
  }))
}

var scanServer = function(){
    var current = []
Object.entries(game.ui.getComponent('Leaderboard').leaderboardData).forEach((item => {
    current.push(item)
    alert(JSON.stringify(current) + "<br><br>")
}))
    return JSON.stringify(current)
}
var scanPlayers = function(){
    var current = []
Object.entries(game.ui.getComponent('Leaderboard').playerNames).forEach((item => {
    current.push(item)
    alert(JSON.stringify(current) + "<br><br>")
}))
    return JSON.stringify(current)
}
var leaderboardData = function(){
    var current = []
Object.entries(game.ui.components.Leaderboard.leaderboardData).forEach((item => {
    current.push(item)
    alert(JSON.stringify(current) + "<br><br>")
}))
    return JSON.stringify(current)
}

const sell = type => {
   var SellArrows = function() {
      
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
}

addEventListener('load', function(e) {
document.querySelector('#scanallservsbtn').addEventListener('click', scanServers)
    document.querySelector('#scanserverbtn').addEventListener('click', scanServer)
    document.querySelector('#scanlbdatabtn').addEventListener('click', scanPlayers)
    document.querySelector('#scanplayernamesbtn').addEventListener('click', scanPlayers)
})
