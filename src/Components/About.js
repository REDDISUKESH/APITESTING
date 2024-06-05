import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        This is the about page. Here we can provide information about our application or company.
      </Typography>
    </Container>
  );
};

export default About;
