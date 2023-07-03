import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Educatif() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div>
            <Accordion 
            expanded={expanded === 'panel1'} 
            onChange={handleChange('panel1')} 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.04)' ,
              color:'#FFFFFF'
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#FFFFFF' }}/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  2020 | BAC S
                </Typography>
                <Typography sx={{ color: 'text' }}>
                BACCALAURÉAT SCIENTIFIQUE OPTION I.S.N (INFORMATIQUE ET SCIENCES DU NUMÉRIQUE)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  J'ai obtenu un baccalauréat général filière scientifique option ISN dans le lycée  
                  <i><strong className="purple"> Duplessis Mornay</strong></i> à SAUMUR.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion 
            expanded={expanded === 'panel2'} 
            onChange={handleChange('panel2')}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.04)' ,
              color:'#FFFFFF'
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon  sx={{ color: '#FFFFFF' }}/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  2022 | BTS SIO (SLAM)
                </Typography>
                <Typography sx={{ color: 'text' }}>
                  BTS S.I.O OPTION SLAM (SOLUTIONS LOGICIELLES ET APPLICATIONS MÉTIERS)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  J'ai obtenu mon BTS SIO au lycée 
                  <i><strong className="purple"> Chevrollier</strong></i> à Angers.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion 
            expanded={expanded === 'panel3'} 
            onChange={handleChange('panel3')}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.04)' ,
              color:'#FFFFFF'
              }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon  sx={{ color: '#FFFFFF' }}/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  2023 | LICENCE (BACHELOR DEVELOPPEUR WEB)
                </Typography>
                <Typography sx={{ color: 'text' }}>
                  BACHELOR DEVELOPPEUR WEB (BACHELOR 3 DÉVELOPPEMENT WEB)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Titre Professionnel : Concepteur Développeur d’Applications<br />
                  Titre certifié RNCP de niveau 6 (acquisition de 60 ECTS)<br />
                  Certificateur officiel : DREETS <i><strong className="purple">MyDigitalSchool</strong></i> à Nantes.
                  <i><strong className="purple"> | En cours</strong></i>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <p style={{ color: "rgb(155 126 172)", marginTop: "2rem" }}>
            "Beuvez toujours ne meurez jamais !"
          </p>
          <footer className="blockquote-footer">Francois Rabelais</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Educatif;
