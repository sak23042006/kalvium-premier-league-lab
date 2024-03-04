// Progression 1 - Create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

try {
  var manager = createManager(managerName, managerAge, currentTeam, trophiesWon);
} catch (e) {
  // handle expected error
}

// Progression 2 - Create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation) {
  if (formation.length === 0) {
    return null;
  }
  return {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
}

try {
  var formationObject = createFormation(formation);
} catch (e) {
  // handle expected error
}

// Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  return players.filter((player) => player.debut === year);
}

// Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  return players.filter((player) => player.position === position);
}

// ... (Continued for Progression 5 to Challenge 2)

// Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  return a.name.localeCompare(b.name);
}

function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter((player) => player.country === country);
  return dataTwo.sort(compare);
}

// Challenge 2 - Sort players that are older than _____ years in alphabetical order
// Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age) {
  var data = players.filter((player) => player.age > age);
  return data;
}
