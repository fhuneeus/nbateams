import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleAccordion from './SimpleAccordion';


export default function PlayerCard(props) {
  return (
    <Card sx={{ minWidth: 275 }} className="tertiary-border">
      <CardContent>
      <Typography variant="h4" gutterBottom className="align-left black-color">
          {props.firstname} {props.lastname}
        </Typography>
        <Typography variant="h5" gutterBottom className="align-left">
          Team:     {props.teamname}<br/>
          Position: {props.position}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <SimpleAccordion teamname={props.teamname} teamabbreviation={props.teamabbreviation} teamconference={props.teamconference}
        teamdivision={props.teamdivision}/>
      </CardContent>
    </Card>
  );
}
