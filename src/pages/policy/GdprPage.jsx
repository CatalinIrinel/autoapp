import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { gdprText } from '../../constants/policies';

const GdprPage = () => {
  return (
    <Flex w={'full'}>
      <Helmet>
        <title>Privacy Policy - Auto Post</title>
      </Helmet>
      <Flex
        flexDir={'column'}
        w={'full'}
        maxW={'100rem'}
        flexDirection={'column'}
      >
        <Heading as={'h1'}>Privacy Policy</Heading>
        <Text>Last updated February 08, 2023</Text>
        <Text>
          This privacy notice for Autopost SRL (
          <strong>'Company', 'we', 'us', or 'our'</strong>), describes how and
          why we might collect, store, use, and/or share (
          <strong>'process'</strong>) your information when you use our services
          (<strong>'Services'</strong>), such as when you:
        </Text>
        <UnorderedList>
          <ListItem>
            Visit our website at https://autopost.tech or any website of ours
            that links to this privacy notice
          </ListItem>
          <ListItem>
            Download and use our Facebook application (PagePoster), or any other
            application of ours that links to this privacy notice
          </ListItem>
          <ListItem>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </ListItem>
        </UnorderedList>

        <Text>
          Questions or concerns? Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with
          our policies and practices, please do not use our Services. If you
          still have any questions or concerns, please contact us at
          contact@autopost.ro.
        </Text>
        <Accordion my="2rem" allowToggle allowMultiple>
          {gdprText.map((item) => (
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

export default GdprPage;
