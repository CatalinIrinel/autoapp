import {
  Button,
  Flex,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const PriceCards = ({ title, price, link, text, list }) => {
  return (
    <Flex
      h={'550px'}
      w={'full'}
      maxW={'100rem'}
      borderRadius={'1rem'}
      px={'4rem'}
      flexWrap={'wrap'}
      alignItems={'center'}
      bg={'rgba(49, 130, 206, 0.171)'}
    >
      <Stack
        w={'300px'}
        h={'400px'}
        borderRadius={'1rem'}
        p={'1rem'}
        boxShadow={'0 5px 1rem rgba(0,0,0,0.4)'}
        bg={'#f7f7f7'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'2rem'}
      >
        <Heading as={'h2'}>{title}</Heading>
        <Text>{price}</Text>
        <Heading as={'h3'}>{price}</Heading>
        <Button>Cumpără acum</Button>
        <Text>Testează pentru 14 zile</Text>
      </Stack>
      <Stack w={'calc(100% - 300px)'} h={'400px'}>
        <Flex w={'full'} h={'30px'} justifyContent={'flex-end'}>
          {' '}
          <Link className="links" to={link}>
            <Text w={'fit-content'}>Mai multe detalii</Text>
          </Link>
        </Flex>
        <HStack
          w={'full'}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
          h={'calc(100% - 30px)'}
        >
          <UnorderedList w={'200px'}>
            {list.map((item, index) => (
              <ListItem
                fontSize={'1.4rem'}
                letterSpacing={'5px'}
                mb={'1rem'}
                key={index}
              >
                {item}
              </ListItem>
            ))}
          </UnorderedList>
          <Text fontSize={'1.3rem'} lineHeight={'2'} w={'400px'}>
            {text}
          </Text>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default PriceCards;
