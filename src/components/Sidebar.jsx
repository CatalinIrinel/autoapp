import { Box, Button, Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { State } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(State);
  return (
    <Box
      w={['0', null, '0']}
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
          <Heading fontSize={'1.5rem'} as={'h2'}>
            Brand Name
          </Heading>{' '}
          <CloseIcon cursor={'pointer'} onClick={() => setIsOpen(false)} />
        </HStack>
        <Stack alignItems={'flex-start'} spacing={'2rem'}>
          {['Acasa', 'Despre', 'Preturi', 'Functionalitati'].map((item) => (
            <Button
              p={0}
              variant={'ghost'}
              _hover={{
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '7px',
              }}
              key={item}
              cursor={'pointer'}
            >
              <Link to="/acasa">{item}</Link>
            </Button>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
