function gameObject () {
    return {
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
};

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
};

function homeTeamName2() {
    return gameObject()['home']['teamName'];
};

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

function numPointsScored(playerName){
    const gameObj = gameObject();
    const teams = Object.values(gameObj);
    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        const players = team.players;
        if (players[playerName] != undefined) {
            return players[playerName].points;
        };
    };
};

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName){
    const gameObj = gameObject();
    const teams = Object.values(gameObj);
    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        const players = team.players;
        if (players[playerName] != undefined) {
            return players[playerName].shoe;
        };
    };
};

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    for(let i=0;i<teams.length; i++){
        const team=teams[i];
        if(team.teamName === teamName){
            return team.colors;
        }
    }
};

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
    const gameObj = gameObject();
    const teams = Object.values(gameObj); 
    const teamNames = [];
    teams.forEach(team => teamNames.push(team.teamName))
    return teamNames;
};

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName){
    const gameObj=gameObject();
    const teams=Object.values(gameObj);
    let team;
    for(let i=0; i<teams.length; i++){
       team=teams[i];
       if(team.teamName === teamName){
        const players=team.players;
        const teamNumbers=[];
        const playerObj = Object.values(players);
        playerObj.forEach(player => {
            teamNumbers.push(player.number)});
            return teamNumbers;
        };
    };
};

// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
function playerStats(playerName){
    const gameObj = gameObject();
    const teams = Object.values(gameObj);
    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        const players = team.players;
        if (players[playerName] != undefined) {
            return players[playerName];
        };
    };
};

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
function bigShoeRebounds() {
    const largestShoeSizePlayerStats = getLargestShoeSizePlayerStats();
    return largestShoeSizePlayerStats.rebounds;
}

function getLargestShoeSizePlayerStats() {
    const gameObj = gameObject();
    const teams = Object.values(gameObj);
    let playersStats = [];
    teams.forEach(team => {
        const players = team.players;
        const teamPlayerStats = Object.values(players);
        playersStats = playersStats.concat(teamPlayerStats)
    });
    let largestReboundsStats = playersStats[0];
    for (let i; i < playersStats.length; i++) {
        if (playersStats[i].rebounds > largestReboundsStats.rebounds) {
            largestReboundsStats = playersStats[i];
        }
    }
    return largestReboundsStats; 
};

