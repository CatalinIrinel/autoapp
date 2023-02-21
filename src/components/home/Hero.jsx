import { Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading as={'h1'}>
        Un mod usor si rapid de a posta pe social media
      </Heading>
      <Stack></Stack>
    </Flex>
  );
};

export default Hero;
