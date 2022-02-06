import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleAccordion from './SimpleAccordion';
import nbalogo from '../img/nbalogo.png'

export default function Title(props) {
  return (
    <Card className="bg-primary display-flex">
      <Typography variant="h1" gutterBottom className="align-left white-color title-margin">
      <img src={nbalogo} className="logo"/>
          List of NBA Players
        </Typography>
     </Card>
  );
}
