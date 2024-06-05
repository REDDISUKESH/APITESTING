import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        This is the contact page. Here we can provide contact details or a contact form.
      </Typography>
    </Container>
  );
};

export default Contact;
