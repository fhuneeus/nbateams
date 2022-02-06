import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="searchTeamCombo"
      options={nbaTeams}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search by team" />}
    />
  );
}
const nbaTeams = [
  { label: 'Boston Celtics'},
  { label: 'Brooklyn Nets'},
  { label: 'New York Knicks'},
  { label: 'Philadelphia 76ers'},
  { label: 'Toronto Raptors'},
  { label: 'Chicago Bulls'},
  { label: 'Cleveland Cavaliers'},
  { label: 'Detroit Pistons'},
  { label: 'Indiana Pacers'},
  { label: 'Milwaukee Bucks'},
  { label: 'Atlanta Hawks'},
  { label: 'Charlotte Hornets'},
  { label: 'Miami Heat'},
  { label: 'Orlando Magic'},
  { label: 'Washington Wizards'},
  { label: 'Denver Nuggets'},
  { label: 'Minnesota Timberwolves'},
  { label: 'Oklahoma City Thunder'},
  { label: 'Portland Trail Blazers'},
  { label: 'Utah Jazz'},
  { label: 'Golden State Warriors'},
  { label: 'LA Clippers'},
  { label: 'Los Angeles Lakers'},
  { label: 'Phoenix Suns'},
  { label: 'Sacramento Kings'},
  { label: 'Dallas Mavericks'},
  { label: 'Houston Rockets'},
  { label: 'Memphis Grizzlies'},
  { label: 'New Orleans Pelicans'},
  { label: 'San Antonio Spurs'}
    ];
