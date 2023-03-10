import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const InfoSection = ({ imageStart, image, title, text }) => {
  return (
    <Box
      className="wrapper"
      display={'grid'}
      zIndex={1}
      width={'100%'}
      maxW={'100rem'}
      justifyContent={'center'}
    >
      <Box
        w={'full'}
        className="gridRow"
        display={'grid'}
        gridAutoColumns={'minmax(auto,1fr)'}
        alignItems={'center'}
        gap={'3rem'}
        gridTemplateAreas={{
          base: `'col1 col1' 'col2 col2'`,
          md: `${imageStart ? `'col2 col1'` : `'col1 col2'`}`,
        }}
      >
        <Stack
          gap={'1rem'}
          gridArea={'col1'}
          w={{ base: '300px', md: '500px', lg: '700px' }}
        >
          <Heading
            as={'h2'}
            textAlign={{ base: 'center', md: 'left' }}
            fontSize={{ base: '1.8rem', md: '2.25rem' }}
          >
            {title}
          </Heading>
          <Text
            w={{ base: '300px', md: '500px', lg: '450px' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {text}
          </Text>
        </Stack>
        <Stack
          w={{ base: '300px', md: '500px', lg: '700px' }}
          gridArea={'col2'}
        >
          <Image
            w={{ base: '300px', md: '500px', lg: '700px' }}
            src={image}
            alt="Auto Post"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default InfoSection;
