import React from 'react';
import {
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { InfoSection } from '../components';
const About = () => {
  return (
    <Flex
      w={'full'}
      flexDir={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={'3rem'}
    >
      <Flex
        w={'full'}
        maxW={'90rem'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'3rem'}
      >
        <Stack justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
          <Heading
            as={'h1'}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '1.8rem', md: '2.25rem' }}
          >
            Ce este AutoPost?
          </Heading>
          <Text
            w={{ base: '300px', lg: '500px' }}
            textAlign={'center'}
            lineHeight={'2'}
          >
            AutoPost este o companie inovatoare specializată în servicii de
            automatizare și distribuire automată pe rețelele de social media.
            Fondată în 2023 în România, suntem dedicați să ajutăm afacerile să
            își gestioneze eficient timpul pe social media, permițându-le să se
            concentreze pe activitățile lor principale.
          </Text>
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
          <Heading
            as={'h2'}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '1.8rem', md: '2.25rem' }}
          >
            Ce rețele de socializare poți conecta?
          </Heading>
          <Image
            w={{ base: '300px', md: 'full' }}
            src={'/images/about1.webp'}
            loading={'lazy'}
          />
        </Stack>
        <Stack justifyContent={'center'} alignItems={'center'} gap={'1rem'}>
          <Heading
            as={'h2'}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '1.8rem', md: '2.25rem' }}
          >
            Gestionăm{' '}
            <Highlight query={'3 Milioane'} styles={{ color: 'brand' }}>
              3 Milioane
            </Highlight>{' '}
            de profile business
          </Heading>
          <Image
            w={{ base: '300px', md: 'full' }}
            src={'/images/about2.webp'}
            loading={'lazy'}
          />
        </Stack>
        <Stack w={'full'} gap={'1rem'}>
          <Heading
            as={'h2'}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '1.8rem', md: '2.25rem' }}
          >
            Misiunea și Viziunea noastră
          </Heading>
          <HStack
            alignItems={'flex-start'}
            w={'full'}
            flexWrap={'wrap'}
            justifyContent={'space-between'}
          >
            {' '}
            <Text w={{ base: '300px', lg: '700px' }} lineHeight={'2'}>
              Echipa noastră de experți în social media a dezvoltat o platformă
              unică de automatizare și distribuire automată pe pagini și grupuri
              Facebook, Instagram, profile de TikTok, Twitter, LinkedIn și
              YouTube. Aceasta permite afacerilor să programeze postări și să
              distribuie conținut automat pe toate platformele de social media,
              economisind timp și resurse, astfel asigurând o prezență constantă
              și consistentă pe rețelele de social media.
            </Text>{' '}
            <Text w={{ base: '300px', lg: '700px' }} lineHeight={'2'}>
              La AutoPost, suntem dedicați să oferim soluții personalizate
              pentru afaceri de toate dimensiunile și din toate industriile.
              Indiferent dacă sunteți o afacere mică sau o corporație mare,
              platforma noastră de automatizare și distribuire automată vă poate
              ajuta să vă gestionați eficient timpul și resursele pe social
              media.
            </Text>
          </HStack>
          <HStack>
            <Text w={{ base: '300px', lg: '700px' }} lineHeight={'2'}>
              Pe pagina noastră de Facebook, veți găsi cele mai recente știri și
              actualizări despre produsele și serviciile noastre, precum și
              sfaturi utile și informații despre cele mai recente tendințe în
              social media. Suntem mândri să fim o companie românească și suntem
              dedicați să oferim cele mai bune servicii de automatizare și
              distribuire automată pe social media pentru afacerile din România
              și din întreaga lume.
            </Text>{' '}
          </HStack>
        </Stack>
        <InfoSection
          imageStart
          image={'/images/about3.webp'}
          title={'Urmărește în timp real'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec massa sapien faucibus et molestie ac feugiat. Justo laoreet sit amet cursus. Sed adipiscing diam donec adipiscing.'
          }
        />
      </Flex>
    </Flex>
  );
};

export default About;
