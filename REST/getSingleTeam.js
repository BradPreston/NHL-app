export let teamID;
let teamDropdown = document.getElementById('teamList').value;

xhr.onload = function () {
  const teamURL = leagueURL + `/${teamID}`;
  team = JSON.parse(this.responseText);
  document.getElementById('h2').innerHTML = team.teams[0].name;
};

xhr.open('GET', teamURL, true);
xhr.send();
