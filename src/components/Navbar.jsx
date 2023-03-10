import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Buttons, LinkButtons } from './Buttons';
import { Store } from '../contexts/ContextProvider';

const Navbar = ({ toggle }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

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
        px={['2rem', null, 0]}
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
            <HStack gap={'1rem'} textTransform={'capitalize'}>
              <Link to={`/`}>
                <Text
                  w={'fit-content'}
                  transition={'border-bottom .2s ease-out'}
                  letterSpacing={'1px'}
                  _hover={{
                    color: 'brand',

                    borderBottom: 'medium solid #3383be',
                  }}
                >
                  acasa
                </Text>
              </Link>

              {[
                'functionalitati',
                'preturi',
                'ghiduri',
                'contact',
                'despre',
              ].map((item) => (
                <Link key={item} to={`/${item}`}>
                  <Text
                    w={'fit-content'}
                    letterSpacing={'1px'}
                    transition={'border-bottom .2s ease-out'}
                    _hover={{
                      color: 'brand',

                      borderBottom: 'medium solid #3383be',
                    }}
                  >
                    {item}
                  </Text>
                </Link>
              ))}
            </HStack>
            <HStack spacing="3">
              {userInfo ? (
                <Buttons
                  bg={'brand'}
                  text={'Delogare'}
                  onClick={signoutHandler}
                />
              ) : (
                <>
                  <LinkButtons
                    link={'/logare'}
                    bg={'secondary'}
                    text={'Logare'}
                  />
                  <LinkButtons
                    link={'/inregistrare'}
                    bg={'brand'}
                    text={'Înregistrare'}
                  />
                </>
              )}
            </HStack>
          </Flex>
        ) : (
          <HamburgerIcon
            boxSize={6}
            _hover={'none'}
            _avtive={'none'}
            aria-label="Open Menu"
            onClick={toggle}
          />
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
