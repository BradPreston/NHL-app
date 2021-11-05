const xhr = new XMLHttpRequest();
const leagueURL = 'https://statsapi.web.nhl.com/api/v1/teams';

let teamURL;
let team;
let teamId = document.getElementById('teamList').value;
teamURL = `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`;
