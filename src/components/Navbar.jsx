import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';
import { useStateContext } from '../contexts/ContextProvider';
import Buttons from './Buttons';

const Navbar = () => {
  const { setIsOpen } = useStateContext();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      w={'full'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      h={'60px'}
      color={'textDark'}
      as={'section'}
    >
      <Box
        as={'nav'}
        w={'full'}
        maxW={'90rem'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={10}
      >
        <Link to={'/'}>
          <Heading as={'h1'} cursor={'pointer'}>
            AP
          </Heading>
        </Link>
        {isDesktop ? (
          <Flex
            justifyContent={'space-between'}
            fontWeight={'bold'}
            letterSpacing={'2px'}
            fontSize={'1.2rem'}
            flex={1}
          >
            <ButtonGroup>
              {['acasa', 'despre', 'preturi', 'functionalitati'].map((item) => (
                <Button
                  variant={'ghost'}
                  _hover={{
                    textDecoration: 'underline',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '7px',
                  }}
                  key={item}
                  cursor={'pointer'}
                  textTransform={'capitalize'}
                >
                  <Link to={`#${item}`}>{item}</Link>
                </Button>
              ))}
            </ButtonGroup>
            <HStack spacing="3">
              <Buttons link={'/logare'} bg={'secondary'} text={'Logare'} />
              <Buttons
                link={'/inregistrare'}
                bg={'brand'}
                text={'Înregistrare'}
              />
            </HStack>
          </Flex>
        ) : (
          <HamburgerIcon
            boxSize={6}
            _hover={'none'}
            _avtive={'none'}
            aria-label="Open Menu"
            onClick={() => setIsOpen(true)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
