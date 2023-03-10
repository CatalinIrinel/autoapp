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
      pb={'5rem'}
    >
      <Heading
        as={'h1'}
        textAlign={'center'}
        fontSize={{ base: '1.8rem', md: '2.25rem' }}
      >
        Alege pachetul <br /> potrivit pentru tine
      </Heading>
      <PriceCards
        title={'Basic'}
        price={'50'}
        highPrice={'100'}
        link={`/preturi/packSlug`}
        list={['10 grupuri Facebook', '10 pagini Facebook', 'Instagram']}
        text={
          'Oferă automatizarea gestionării a 10 pagini de Facebook și 10 grupuri de Facebook. Acest pachet de servicii este ideal pentru companiile sau persoanele care au un număr mic de conturi de social media, dar care încă doresc să profite de beneficiile automatizării pentru a-și îmbunătăți prezența online. Prin automatizarea acestor conturi, veți putea economisi timp și energie în gestionarea acestora și veți putea crește prezența dvs. online. Prin automatizarea postărilor și programarea lor, veți putea păstra un conținut constant și coerent pentru a menține angajamentul utilizatorilor.'
        }
      />
      <PriceCards
        title={'Professional'}
        price={'100'}
        highPrice={'150'}
        link={`/preturi/packSlug`}
        list={['25 pagini Facebook', '25 grupuri Facebook', 'Instagram']}
        text={
          'Oferă automatizarea gestionării a 25 de pagini de Facebook și 25 de grupuri de Facebook si a profilului de Instagram. De asemenea, puteți alege să adăugați opțiunea de a automatiza și alte rețele de socializare, cum ar fi TikTok, Youtube, Twitter și LinkedIn, pentru doar 10 euro pe fiecare rețea. Acest pachet de servicii este proiectat pentru a ajuta la gestionarea mai multor conturi de social media și a postărilor.'
        }
      />
      <PriceCards
        title={'Elite'}
        price={'200'}
        highPrice={'250'}
        link={`/preturi/packSlug`}
        list={[
          '50 pagini Facebook',
          '50 grupuri Facebook',
          'Instagram',
          'Tiktok',
          'Youtube',
          'Twitter',
          'Linkedin',
          'Gestionare comentarii Facebook',
          'Statistici pagini',
        ]}
        text={
          'Oferă automatizarea gestionării a 50 de pagini de Facebook, 50 de grupuri de Facebook, Instagram, TikTok, Youtube, Twitter și LinkedIn. În plus, acest pachet include și gestionarea comentariilor paginilor de Facebook, astfel încât să puteți rămâne conectat cu audiența dvs. și să răspundeți la întrebările lor în timp util. Pentru a vă ajuta să urmăriți performanțele conturilor dvs. de Facebook, acest pachet oferă și statistici detaliate privind vizualizările, angajamentul și alte metrici relevante. În general, acest pachet vă oferă un mod eficient de a gestiona și crește prezența dvs. pe mai multe platforme de social media fără a fi nevoie să petreceți timp prea mult timp și resurse pentru a face acest lucru manual.'
        }
      />
    </Flex>
  );
};

export default PricesPage;
