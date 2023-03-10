import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const PriceCards = ({ title, price, highPrice, link, text, list }) => {
  return (
    <Flex
      minH={'550px'}
      w={'full'}
      maxW={'100rem'}
      borderRadius={'1rem'}
      py={['2rem', null, 0]}
      px={[0, null, '4rem']}
      flexDir={{ base: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'rgba(49, 130, 206, 0.171)'}
      gap={{ base: '2rem', md: 0 }}
      boxShadow={'0 7px 1.5rem  rgba(0,0,0,0.2)'}
    >
      <Stack
        w={['250px', null, '300px']}
        h={{ base: 'fit-content', md: '400px' }}
        borderRadius={'1rem'}
        p={'1rem'}
        boxShadow={'0 5px 1rem rgba(0,0,0,0.4)'}
        bg={'#f7f7f7'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ base: '.2rem', md: '2rem' }}
      >
        <Heading
          as={'h2'}
          textAlign={'center'}
          fontSize={{ base: '1.4rem', md: '2.25rem' }}
        >
          {title}
          <Image w={'full'} src={'/images/Union.svg'} />
        </Heading>
        <Stack justifyContent={'center'} alignItems={'center'}>
          <Text
            mb={'-1rem'}
            as={'del'}
            textDecorationColor={'red'}
            textDecorationThickness={'3px'}
            fontWeight={'bold'}
            fontSize={'1.1rem'}
            color={'#1a1a1a'}
          >
            {highPrice}&euro; / luna
          </Text>
          <Heading as={'h3'} color={'brand'}>
            {price}&euro; / luna
          </Heading>
        </Stack>
        <Button _hover={'none'} py={'.5rem'} bg={'brand'} color={'textLight'}>
          Cumpără acum
        </Button>
        <Button _hover={'none'} variant={'ghost'} color={'textDark'}>
          Testează pentru 14 zile
        </Button>
        <Flex w={'full'} h={'30px'} justifyContent={'center'}>
          <Link className="links" to={link}>
            <Text w={'fit-content'}>Mai multe detalii</Text>
          </Link>
        </Flex>
      </Stack>
      <Stack
        w={{ base: 'full', md: 'calc(100% - 300px)' }}
        flexWrap={'wrap'}
        alignItems={'center'}
        minH={'400px'}
      >
        <HStack
          w={'full'}
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', md: 'space-evenly' }}
          alignItems={'center'}
          h={{ base: 'fit-content', md: 'calc(100% - 30px)' }}
        >
          <UnorderedList
            display={'flex'}
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={'center'}
            flexDir={'column'}
            m={0}
            w={{ base: 'full', md: '330px' }}
            h={{ base: 'fit-content', md: '400px' }}
          >
            {list.map((item, index) => (
              <ListItem
                fontWeight={'bold'}
                fontSize={{ base: '1rem', md: '1.25rem' }}
                letterSpacing={'5px'}
                mb={'.5rem'}
                key={index}
              >
                {item}
              </ListItem>
            ))}
          </UnorderedList>
          <Text
            noOfLines={9}
            fontSize={{ base: '1rem', md: '1.3rem' }}
            lineHeight={'2'}
            w={{ base: '300px', md: '400px' }}
          >
            {text}
          </Text>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default PriceCards;
