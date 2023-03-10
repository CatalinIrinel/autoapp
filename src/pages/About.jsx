import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
const About = () => {
  return (
    <Flex
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'3rem'}
    >
      <Flex
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'1rem'}
      >
        <Heading as={'h1'}>Ce este AutoPost?</Heading>
        <Text
          w={{ base: '300px', lg: '500px' }}
          textAlign={'center'}
          lineHeight={'2'}
        >
          AutoPost este o companie inovatoare specializată în servicii de
          automatizare și distribuire automată pe rețelele de social media.
          Fondată în 2023 în România, suntem dedicați să ajutăm afacerile să își
          gestioneze eficient timpul pe social media, permițându-le să se
          concentreze pe activitățile lor principale.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
