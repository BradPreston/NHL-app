const teamList = document.getElementById('teamList');
const allTeamsURL = 'https://statsapi.web.nhl.com/api/v1/teams';

xhr.onload = function () {
  const league = JSON.parse(this.responseText);

  league.teams.map(team => {
    let option = document.createElement('option');
    option.value = team.id;
    option.innerHTML = team.name;
    teamList.appendChild(option);
  });
};

xhr.open('GET', allTeamsURL, true);
xhr.send();
