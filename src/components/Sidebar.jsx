import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Box
      w={[isOpen ? '80%' : 0, null, 0]}
      h={'100vh'}
      position={'fixed'}
      top={0}
      right={0}
      display={'none'}
      flexDir={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      gap={'3rem'}
      bg={'secondary'}
      py={'1rem'}
      px={'3rem'}
      color={'#f1f1f1'}
      transition={'all .8s ease-in-out'}
    >
      <Flex
        w={'full'}
        flexDir={'column'}
        fontWeight={'bold'}
        letterSpacing={'2px'}
        fontSize={'1.2rem'}
        flex={1}
        gap={'3rem'}
      >
        <HStack w={'full'} justifyContent={'space-between'}>
          <Link to={'/'}>
            <Image
              w={'150px'}
              objectFit={'contain'}
              src={'/images/LogoFinal.png'}
              alt={'Auto Post'}
            />
          </Link>
          <CloseIcon cursor={'pointer'} onClick={toggle} />
        </HStack>
        <Stack alignItems={'flex-start'} spacing={'2rem'}>
          {['functionalitati', 'preturi', 'ghiduri', 'contact', 'despre'].map(
            (item) => (
              <Link key={item} to={`/${item}`} onClick={toggle}>
                <Text
                  w={'fit-content'}
                  letterSpacing={'1px'}
                  transition={'border-bottom .2s ease-out'}
                >
                  {item}
                </Text>
              </Link>
            )
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
