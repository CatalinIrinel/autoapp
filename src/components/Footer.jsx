import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w={'full'}
      minH={'60px'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'gradientBg'}
      color={'textLight'}
    >
      <Flex w={'full'} maxW={'90rem'} justifyContent={'space-between'}>
        <Heading as={'h1'}>Footer</Heading>
        <Heading as={'h1'}>Footer</Heading>
        <Heading as={'h1'}>Footer</Heading>
      </Flex>
    </Flex>
  );
};

export default Footer;
