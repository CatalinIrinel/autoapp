import { DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  // Input,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Divider,
  Avatar,
  Text,
  HStack,
  // Select,
  // Flex,
} from '@chakra-ui/react';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useInitFbSDK } from '../hooks/fbHooks';

const FbPostPage = () => {
  // facebook sdk async
  const isFbSDKInitialized = useInitFbSDK();
  const [fbUserAccessToken, setFbUserAccessToken] = useState();

  useEffect(() => {
    if (isFbSDKInitialized) {
      window.FB.getLoginStatus((response) => {
        setFbUserAccessToken(response.authResponse?.accessToken);
      });
    }
  }, [isFbSDKInitialized]);
  //pages group
  const [pageGroups, setPageGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

  const addGroup = (group) => {
    const id = group.id;
    const duplicate = selectedGroups.find((item) => item.id === id);
    if (selectedGroups.length !== 50) {
      if (!duplicate) {
        setSelectedGroups([...selectedGroups, group]);
      } else {
        toast.error('Pagina este deja aleasa');
      }
    } else {
      toast.info('Poti selecta maxim 50 de grupuri');
    }
  };
  const getPageGroups = () => {
    const pageId = '106939041848909';
    const accessToken =
      'EAARnMJhup2kBACxodTOFJZB79IA0GM6juRkia0fAI49v5cw8Yp22rxbiGzNzCiHRpyg6EmeXlVmzUUH5pbQAa5UCIRIOMinEvvZABtLipfhxx6UNuNSED8tmkytNdR7q8osyPbrfBFSbdZBXSysY30miqpdgB1w8yZCEPC7GBKqrSkUIxMaV1SJgHZBIT8QBGrhbTK9OIDgZDZD';

    window.FB.api(
      `/${pageId}/groups`,
      'GET',
      { access_token: accessToken },
      (response) => {
        if (response && !response.error) {
          console.log('Page groups are:');
          console.log(response.data);
          setPageGroups(response.data);
        }
      }
    );
  };

  const deselectGroup = (id) => {
    const newSelected = selectedGroups.filter((item) => item.id !== id);
    setSelectedGroups(newSelected);
  };
  return (
    <Box w={'full'} py={'4rem'}>
      <Accordion w={['500px']} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            Alege pe ce grupuri sa postezi <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Stack alignItems={'flex-start'}>
              <Button
                variant={'ghost'}
                _hover={'none'}
                _active={'none'}
                onClick={getPageGroups}
              >
                get groups
              </Button>
              <Divider />
              <Stack gap={'1rem'} alignItems={'flex-start'}>
                {pageGroups.map((page) => (
                  <Button
                    key={page.id}
                    variant={'ghost'}
                    onClick={() => {
                      addGroup(page);
                    }}
                  >
                    <Avatar name={page.name} />
                    <Text>{page.name}</Text>
                  </Button>
                ))}
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {selectedGroups.length !== 0 && (
        <HStack w={['500px']} flexWrap={'wrap'}>
          {selectedGroups.map((page) => (
            <Stack key={page.id}>
              <Avatar src={page.picture} />

              <DeleteIcon
                color={'facebook.500'}
                onClick={() => deselectGroup(page.id)}
              />
            </Stack>
          ))}
        </HStack>
      )}
    </Box>
  );
};

export default FbPostPage;
