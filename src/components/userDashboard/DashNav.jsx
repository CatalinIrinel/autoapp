import React, { useContext } from 'react';
import { FlexBox } from './customChakra/flexBox';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { BsChatDots, BsCart2, BsBell } from 'react-icons/bs';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link } from 'react-router-dom';

const NavButton = ({ title, onClick, icon, color, bgColor }) => (
  <Tooltip hasArrow label={title} placement={'bottom'}>
    <IconButton
      bg={'transparent'}
      onClick={onClick}
      color={color}
      _hover={{ background: bgColor }}
      _active={'none'}
      fontSize={'1.5rem'}
      icon={icon}
      borderRadius={'50%'}
    />
  </Tooltip>
);

const Navbar = ({ toggle }) => {
  const {
    state,
    dispatch: ctxDispatch,
    handleClick,
    setIsOpen,
  } = useContext(useStateContext);
  const { userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };

  return (
    <FlexBox
      className={'navbar'}
      bg={'brand'}
      height={'70px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <FlexBox
        variant={'wrapper'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Tooltip hasArrow label={'Menu'} placement={'bottom'}>
          <IconButton
            bg={'brand'}
            fontSize={'1.5rem'}
            color={'textLight'}
            _hover={'none'}
            _active={'none'}
            icon={<HamburgerIcon />}
            onClick={() => setIsOpen(true)}
          />
        </Tooltip>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={'1rem'}
        >
          <NavButton
            title={'Cart'}
            color={'textLight'}
            bgColor={'brand'}
            icon={<BsCart2 />}
            onClick={() => handleClick('cart')}
          />
          <NavButton
            title={'Chat'}
            color={'textLight'}
            bgColor={'brand'}
            icon={<BsChatDots />}
            onClick={() => handleClick('chat')}
          />
          <NavButton
            title={'Notification'}
            color={'textLight'}
            bgColor={'brand'}
            icon={<BsBell />}
            onClick={() => handleClick('notification')}
          />
          <Tooltip hasArrow label={'Profile'} placement={'bottom'}>
            <Avatar
              onClick={() => handleClick('userProfile')}
              size={'md'}
              name={userInfo.surname}
              src={'/images/userprofile.jpg'}
            />
          </Tooltip>
          <Menu>
            <Tooltip hasArrow label={'User Menu'} placement={'bottom'}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                _hover={{
                  color: 'textLight',
                  bgColor: 'brand',
                }}
              >
                Hi, {userInfo.surname}
              </MenuButton>
            </Tooltip>
            <MenuList>
              <Link to="#">
                <MenuItem></MenuItem>
              </Link>
              <MenuDivider />
              <Link to="#delogare" onClick={signoutHandler}>
                <MenuItem>Delogare</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </FlexBox>
    </FlexBox>
  );
};

export default Navbar;
