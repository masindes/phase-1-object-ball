function gameObject() {
    const game = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return game;
  }
  // console.log(gameObject());
  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  // console.log(homeTeamName());
  
  function numPointsScored(player) {
    if (gameObject()["home"]["players"][player]) {
      return gameObject()["home"]["players"][player].points;
    } else {
      return gameObject()["away"]["players"][player].points;
    }
  }
  function shoeSize(player) {
    if (gameObject()["home"]["players"][player]) {
      return gameObject()["home"]["players"][player].shoe;
    } else {
      return gameObject()["away"]["players"][player].shoe;
    }
  }
  function teamColors(team) {
    if (gameObject()["home"].teamName == team) {
      return gameObject()["home"].colors;
    } else {
      return gameObject()["away"].colors;
    }
  }
  function teamNames() {
    const teamNames = [gameObject().home.teamName, gameObject().away.teamName];
    return teamNames;
  }
  function playerNumbers(team) {
    const playerNums = [];
    if (gameObject()["home"].teamName == team) {
      for (let i = 0; i < Object.keys(gameObject()["home"].players).length; i++) {
        playerNums.push(Object.entries(gameObject().home.players)[i][1].number);
      }
    } else {
      for (let i = 0; i < Object.keys(gameObject()["home"].players).length; i++) {
        playerNums.push(Object.entries(gameObject().away.players)[i][1].number);
      }
    }
    return playerNums;
  }
  
  function playerStats(player) {
    if (gameObject()["home"]["players"][player]) {
      return gameObject()["home"]["players"][player];
    } else {
      return gameObject()["away"]["players"][player];
    }
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    for (let homeAway in game) {
      let team = game[homeAway];
      for (let player in team.players) {
        if (team.players[player].shoe > biggestShoeSize) {
          biggestShoeSize = team.players[player].shoe;
        }
      }
    }
    for (let player in game.home.players) {
      if (game.home.players[player].shoe === biggestShoeSize) {
        return game.home.players[player].rebounds;
      }
    }
    for (let player in game.away.players) {
      if (game.away.players[player].shoe === biggestShoeSize) {
        return game.away.players[player].rebounds;
      }
    }
  }
  
  // console.log(numPointsScored("Jason Terry"));
  // console.log(shoeSize("Jason Terry"));
  // console.log(teamColors("Charlotte Hornets"));
  // console.log(teamNames());
  // console.log(playerNumbers("Charlotte Hornets"));
  // console.log(playerStats("Jason Terry"));
  // console.log(bigShoeRebounds());