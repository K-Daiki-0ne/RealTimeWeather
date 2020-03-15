import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const Weather = () => {
  return (
    <Container fixed>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '95vh' }}>
        <p>Hello World</p>
      </Typography>
    </Container>
  )
}