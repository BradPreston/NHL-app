import teamID from './getSingleTeam';

xhr.onload = function () {
  const roster = JSON.parse(this.responseText).roster;

  const rw = document.getElementById('roster-RW');
  const center = document.getElementById('roster-C');
  const lw = document.getElementById('roster-LW');
  const defense = document.getElementById('roster-D');
  const goalie = document.getElementById('roster-G');
  roster.sort((a, b) => a.jerseyNumber > b.jerseyNumber);
  roster.forEach(player => {
    let li = document.createElement('li');
    switch (player.position.code) {
      case 'C':
        li.innerHTML = `${player.person.fullName} | ${player.jerseyNumber}`;
        center.appendChild(li);
        break;
      case 'R':
        li.innerHTML = `${player.person.fullName} | ${player.jerseyNumber}`;
        rw.appendChild(li);
        break;
      case 'L':
        li.innerHTML = `${player.person.fullName} | ${player.jerseyNumber}`;
        lw.appendChild(li);
        break;
      case 'D':
        li.innerHTML = `${player.person.fullName} | ${player.jerseyNumber}`;
        defense.appendChild(li);
        break;
      case 'G':
        li.innerHTML = `${player.person.fullName} | ${player.jerseyNumber}`;
        goalie.appendChild(li);
        break;
      default:
        li.innerHTML = 'players not found';
        rw.appendChild(li);
        break;
    }
  });
};
xhr.open('GET', leagueURL + teamID + '/roster', true);
xhr.send();
