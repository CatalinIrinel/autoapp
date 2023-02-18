import { VStack } from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero, Cta, Functionality, Prices, About } from '../components';

const HomePage = () => {
  return (
    <VStack w={'full'}>
      <Helmet>
        <title>Autopost - Partenerul tau la social media</title>
        {/* de adaugat datele pentru SEO */}
      </Helmet>
      <Hero />
      <Cta />
      <Functionality />
      <Prices />
      <About />
    </VStack>
  );
};

export default HomePage;
