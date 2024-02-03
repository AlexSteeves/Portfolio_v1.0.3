import React from 'react';
import { Card, Chip, Grid, Typography } from '@mui/material';
import { SiJavascript, SiReact, SiPython } from 'react-icons/si'; // Example icons

const skills = [
  { label: 'JavaScript', Icon: SiJavascript },
  { label: 'React', Icon: SiReact },
  { label: 'Python', Icon: SiPython },
  // Add more skills here
];

const List = () => (
  <Grid container spacing={2}>
    {skills.map((skill, index) => (
      <Grid item xs={6} sm={4} md={3} key={index}>
        <Card variant="outlined" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
          <Chip
            icon={<skill.Icon />}
            label={skill.label}
            variant="outlined"
          />
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default List;
