import {
  Heading,
  Stack,
  Icon,
  Link,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { BsGear } from 'react-icons/bs';

const Contact = () => {
  return (
    <Stack
      w={'full'}
      minH={'calc(100vh - 300px)'}
      alignItems={'center'}
      justifyContent={'flex-start'}
    >
      <Heading
        as={'h1'}
        h={'45px'}
        textAlign={{ base: 'center', md: 'left' }}
        fontSize={{ base: '1.8rem', md: '2.25rem' }}
      >
        Nu ezitati sa ne contactati
      </Heading>
      <Flex
        w={'full'}
        minH={'calc(100vh - 345px)'}
        maxW={'90rem'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack
          w={'350px'}
          gap={'1.25rem'}
          p={'1rem'}
          borderRadius={'1rem'}
          boxShadow={'0 7px 1rem 2px rgba(0,0,0,0.12)'}
        >
          <Heading
            as={'h2'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            gap={'.5rem'}
            fontSize={{ base: '1.4rem', md: '1.8rem' }}
          >
            <Icon as={BsGear} /> Suport tehnic
          </Heading>
          <Divider borderColor={'brand'} />
          <Link color={'brand'} href="mailto:support@autopost.ro">
            support@autopost.ro
          </Link>
          <Text fontSize={'1rem'}>Program: L - V, 24h </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Contact;
