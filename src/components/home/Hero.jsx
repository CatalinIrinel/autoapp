import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { LinkButtons } from '../Buttons';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      className="container"
      mt={'-100px'}
    >
      <Flex
        w={'full'}
        maxW={'100rem'}
        h={'full'}
        alignItems={'center'}
        justifyContent={{ base: 'center', lg: 'space-between' }}
        flexWrap={'wrap'}
        className="wrapper"
      >
        <Box w={{ base: '300px', md: '500px', lg: '700px' }}>
          <Image objectFit={'cover'} w={'100%'} src={'/images/hero.webp'} />
        </Box>
        <Flex
          flexDir={'column'}
          gap={'1.5rem'}
          w={{ base: '300px', md: '500px', lg: '700px' }}
        >
          <Heading as={'h1'}>
            Cel mai bun mod de optimizare și organizare a activității din MEDIUL
            ONLINE
          </Heading>

          <Stack direction={{ base: 'column', md: 'row' }} gap={'1rem'}>
            <LinkButtons
              bg={'brand'}
              link={'/dashboard'}
              text={'Testează gratuit'}
            />
            <LinkButtons
              bg={'secondary'}
              link={'/demo'}
              text={'Programează o demonstrație'}
            />
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
