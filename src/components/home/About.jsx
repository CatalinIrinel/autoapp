import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const About = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <Box>
      <Heading as={'h1'}>About Area</Heading>
    </Box>
  );
};

export default About;
