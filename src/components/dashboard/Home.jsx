import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Flex w={'full'} flexDir={'column'}>
      <Heading as={'h1'}>Conectează-te</Heading>
      <HStack>
        <Box>aici vor fi butoanele pt login pe fb insta tiktok twitter etc</Box>
        <Box>aici vor fi butoanele pt login pe fb insta tiktok twitter etc</Box>
        <Box>aici vor fi butoanele pt login pe fb insta tiktok twitter etc</Box>
        <Box>aici vor fi butoanele pt login pe fb insta tiktok twitter etc</Box>
      </HStack>
    </Flex>
  );
};

export default Home;
