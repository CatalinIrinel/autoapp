import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { termsAndConditions } from '../../constants/policies';

const TncPage = () => {
  return (
    <Flex w={'full'}>
      <Helmet>
        <title>Terms & Conditions - Auto Post</title>
      </Helmet>
      <Flex
        flexDir={'column'}
        w={'full'}
        maxW={'100rem'}
        flexDirection={'column'}
      >
        <Heading as={'h1'}>Terms & Conditions</Heading>
        <Text>Last updated February 08, 2023</Text>

        <Accordion my="2rem" allowToggle allowMultiple>
          {termsAndConditions.map((item) => (
            <AccordionItem key={item.title}>
              <h2>
                <AccordionButton>
                  <Box flex={1} textAlign="left">
                    <Heading as="h3" fontSize="2xl" textTransform="uppercase">
                      {item.title}
                    </Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.text.map((item, index) => (
                  <Box key={index} mb="1rem" textAlign="justify">
                    {item}
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default TncPage;
