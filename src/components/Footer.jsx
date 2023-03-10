import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link as LinkC,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Flex
      w={'full'}
      minH={'200px'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'brand'}
      color={'textLight'}
      py={'2rem'}
    >
      <Flex
        w={'full'}
        maxW={'90rem'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        gap={['2rem', null, 0]}
      >
        <Stack
          w={{ base: 'full', md: '250px' }}
          alignItems={'center'}
          gap={'1.5rem'}
        >
          <Image width={'250px'} src={'/images/LogoFinal-W.png'} />
          <HStack w={'250px'} justifyContent={'space-between'}>
            <LinkC
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
              href={'https://facebook.com'}
            >
              <IconButton
                variant={'ghost'}
                fontSize={'2rem'}
                _hover={{ bg: '#f1f1f1', color: 'brand' }}
                icon={<FaFacebook />}
              />
            </LinkC>
            <LinkC
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
              href={'https://twitter.com'}
            >
              <IconButton
                variant={'ghost'}
                fontSize={'2rem'}
                _hover={{ bg: '#f1f1f1', color: 'brand' }}
                icon={<FaTwitter />}
              />
            </LinkC>
            <LinkC
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
              href={'https://instagram.com'}
            >
              <IconButton
                variant={'ghost'}
                fontSize={'2rem'}
                _hover={{ bg: '#f1f1f1', color: 'brand' }}
                icon={<FaInstagram />}
              />
            </LinkC>
            <LinkC
              target="_blank"
              aria-label="Tiktok"
              rel="noreferrer"
              href={'https://tiktok.com'}
            >
              <IconButton
                variant={'ghost'}
                fontSize={'2rem'}
                _hover={{ bg: '#f1f1f1', color: 'brand' }}
                icon={<FaTiktok />}
              />
            </LinkC>
            <LinkC
              target="_blank"
              aria-label="Youtube"
              rel="noreferrer"
              href={'https://youtube.com'}
            >
              <IconButton
                variant={'ghost'}
                fontSize={'2rem'}
                _hover={{ bg: '#f1f1f1', color: 'brand' }}
                icon={<FaYoutube />}
              />
            </LinkC>
          </HStack>
        </Stack>
        <Stack
          gap={'1.5rem'}
          w={{ base: 'full', md: '250px' }}
          alignItems={'center'}
          fontSize={'1.25rem'}
        >
          <Heading as={'h3'}>Politici</Heading>
          <Link to={'/termeni-conditii'}>Termeni și condiții</Link>
          <Link to={'/termeni-utilizare'}>Termeni de utilizare</Link>
          <Link to={'/gdpr'}>Politica GDPR</Link>
        </Stack>
        <Stack w={{ base: 'full', md: '250px' }} alignItems={'center'}>
          {' '}
          <LinkC
            target="_blank"
            aria-label="ANPC - SOL"
            rel="noreferrer"
            href={'https://ec.europa.eu/consumers/odr'}
          >
            <Image w={'200px'} src={'/images/SOL.png'} />
          </LinkC>
          <LinkC
            target="_blank"
            aria-label="ANPC - SAL"
            rel="noreferrer"
            href={'https://ec.europa.eu/consumers/odr'}
          >
            <Image w={'200px'} src={'/images/SAL.png'} />
          </LinkC>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
