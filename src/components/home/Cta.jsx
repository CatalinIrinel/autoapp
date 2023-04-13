import {
  Flex,
  HStack,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import React from 'react';
import { ctaTexts } from '../../constants/texts';

const Cta = () => {
  return (
    <Stack w={'full'} alignItems={'center'} justifyContent={'center'}>
      <HStack
        w={'full'}
        maxW={'70rem'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {ctaTexts.map((text) => (
          <Flex
            key={text.title}
            border={'2px solid #3383bc'}
            w={'300px'}
            p={'1rem'}
            borderRadius={'1rem'}
            alignItems={'center'}
            justifyContent={'center'}
            boxShadow={'0 7px 1rem 1px rgba(0,0,0,0.25)'}
          >
            <Stat>
              <StatLabel w={'fit-content'} textTransform={'uppercase'}>
                {text.title}
              </StatLabel>
              <StatNumber w={'fit-content'}>{text.number}</StatNumber>
              <StatHelpText w={'fit-content'}>
                <StatArrow type="increase" />
                {text.difference} %
              </StatHelpText>
            </Stat>
          </Flex>
        ))}
      </HStack>
    </Stack>
  );
};

export default Cta;
