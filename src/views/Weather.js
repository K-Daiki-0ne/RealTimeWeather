import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { getLocation } from '../utils/location';

export const Weather = () => {
  const [location, setLocation] = useState()
  useEffect(() => {
    getLocation().then(data => setLocation(data));
  }, []);

  return (
    <Container fixed>
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '95vh' }}>
        <p>Hello World</p>
      </Typography>
    </Container>
  )
}