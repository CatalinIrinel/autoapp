import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cta, Hero } from '../components';
import InfoSection from '../components/home/InfoSection';

const HomePage = () => {
  return (
    <VStack w={'full'}>
      <Helmet>
        <title>Autopost - Partenerul tau la social media</title>
        {/* de adaugat datele pentru SEO */}
      </Helmet>
      <Hero />
      <Cta />
      <InfoSection
        imageStart
        image={'/images/home1.webp'}
        title={'Postează mai ușor și mai rapid'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat. Justo laoreet sit amet cursus. Sed adipiscing diam donec adipiscing.'
        }
      />
      <InfoSection
        image={'/images/hom2.webp'}
        title={'Urmărește în timp real'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat. Justo laoreet sit amet cursus. Sed adipiscing diam donec adipiscing.'
        }
      />
    </VStack>
  );
};

export default HomePage;
