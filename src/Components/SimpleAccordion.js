import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Team details</Typography>
        </AccordionSummary>
        <AccordionDetails className="align-left">
          <Typography>
            Team abbreviation: {props.teamabbreviation}<br/>
            Team name : {props.teamname}<br/>
            Tema conference: {props.teamconference}<br/>
            Team division: {props.teamdivision}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
