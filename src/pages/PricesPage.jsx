import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { PriceCards } from '../components';

const PricesPage = () => {
  return (
    <Flex
      w={'full'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      gap={'3rem'}
    >
      <Heading as={'h1'}>
        Alege pachetul <br /> potrivit pentru tine
      </Heading>
      <PriceCards
        title={'Base Media'}
        price={'75'}
        link={'/'}
        list={['10 grupuri', '10 pagini', 'instagram', 'facebook']}
        text={
          'Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui.'
        }
      />
      <PriceCards
        title={'Full Media'}
        price={'200'}
        link={'/'}
        list={['1', '2', '3']}
        text={
          'Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui.'
        }
      />
      <PriceCards
        title={'Platinum Media'}
        price={'350 &euro; / luna'}
        link={'/'}
        list={['1', '2', '3']}
        text={
          'Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui. Introdu scurta descriere a pachetlui.'
        }
      />
    </Flex>
  );
};

export default PricesPage;
