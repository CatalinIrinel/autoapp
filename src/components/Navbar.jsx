import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { State } from '../contexts/ContextProvider';
import { LinkButtons } from './Buttons';

const Navbar = () => {
  const { state, dispatch: ctxDispatch } = useContext(State);
  const { userInfo } = state;
  const { setIsOpen } = useContext(State);
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
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
      h={'100px'}
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
          <Image
            w={'150px'}
            objectFit={'contain'}
            src={'/images/LogoFinal.png'}
            alt={'Auto Post'}
          />
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
              <Button
                variant={'ghost'}
                _hover={{
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '7px',
                }}
                cursor={'pointer'}
                textTransform={'capitalize'}
              >
                <Link to={`/`}>acasă</Link>
              </Button>
              {[
                'functionalitati',
                'preturi',
                'ghiduri',
                'contact',
                'despre',
              ].map((item) => (
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
                  <Link to={`/${item}`}>{item}</Link>
                </Button>
              ))}
            </ButtonGroup>
            <HStack spacing="3">
              <LinkButtons link={'/logare'} bg={'secondary'} text={'Logare'} />
              <LinkButtons
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
