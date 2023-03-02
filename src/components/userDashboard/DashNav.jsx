import {
  Box,
  Image,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const DashSidebar = () => {
  return (
    <Box
      w={'13rem'}
      height={'100vh'}
      position={'fixed'}
      zIndex={100000}
      top={0}
      left={0}
      display={'flex'}
      flexDir={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      gap={'3rem'}
      bg={'linear-gradient(90deg, #2a4365, #3182ce)'}
      color={'text'}
      transition={'all .8s ease-in-out'}
      padding={'1.5rem 2rem'}
      boxShadow={useColorModeValue(
        '8px 0 1rem rgba(0,0,0,0.3)',
        '0 0 1.5rem rgba(255,255,255,0.2)'
      )}
      fontSize={'1.25rem'}
      className="sidebar"
    >
      <Box
        w={'full'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Link to="/dashboard">
          <Image width={'150px'} src={'/images/LogoFinal-W.png'} />
        </Link>
      </Box>
      <UnorderedList
        w={'full'}
        m={0}
        listStyleType={'none'}
        display={'flex'}
        flexDir={'column'}
        color={'titleLight'}
      >
        <ListItem
          color={useColorModeValue('titleLight', 'secondaryDark')}
          fontWeight={'bold'}
          textDecoration={'underline'}
          fontSize={'1rem'}
        >
          Panou de control
        </ListItem>
        <ListItem>
          <Link to="/dashboard">Acasa</Link>
        </ListItem>
      </UnorderedList>

      <UnorderedList
        m={0}
        listStyleType={'none'}
        display={'flex'}
        flexDir={'column'}
        gap={'1rem'}
        color={'titleLight'}
      >
        <ListItem
          color={useColorModeValue('titleLight', 'titleDark')}
          fontWeight={'bold'}
          textDecoration={'underline'}
          fontSize={'1rem'}
        >
          Apps
        </ListItem>
        {[
          { text: 'workflow', link: '/workflow' },
          { text: 'programari', link: '/programari' },
          { text: 'comentarii', link: '/comentarii' },
        ].map((item, index) => (
          <ListItem textTransform={'capitalize'} key={index}>
            <Link to={`/${item.link}`}>{item.text}</Link>
          </ListItem>
        ))}
      </UnorderedList>

      <UnorderedList
        m={0}
        listStyleType={'none'}
        display={'flex'}
        flexDir={'column'}
        gap={'1rem'}
        color={'titleLight'}
      >
        <ListItem
          color={useColorModeValue('titleLight', 'secondaryDark')}
          fontWeight={'bold'}
          textDecoration={'underline'}
          fontSize={'1rem'}
        >
          Statistici
        </ListItem>
        {[
          { text: 'facebook', link: '/statistici/facebook' },
          { text: 'instagram', link: '/statistici/instagram' },
          { text: 'tiktok', link: '/statistici/tiktok' },
        ].map((item, index) => (
          <ListItem textTransform={'capitalize'} key={index}>
            <Link to={`/${item.link}`}>{item.text}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default DashSidebar;
