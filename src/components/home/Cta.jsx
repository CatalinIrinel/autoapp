import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useInitFbSDK } from '../../hooks/fbHooks';
import { getError } from '../../Utils';
import axios from 'axios';
import { toast } from 'react-toastify';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'UPDATE_REQUEST':
//       return { ...state, loadingUpdate: true };
//     case 'UPDATE_SUCCESS':
//       return { ...state, loadingUpdate: false };
//     case 'UPDATE_FAIL':
//       return { ...state, loadingUpdate: false };
//     case 'UPLOAD_REQUEST':
//       return { ...state, loadingUpload: true, errorUpload: '' };
//     case 'UPLOAD_SUCCESS':
//       return {
//         ...state,
//         loadingUpload: false,
//         errorUpload: '',
//       };
//     case 'UPLOAD_FAIL':
//       return { ...state, loadingUpload: false, errorUpload: action.payload };
//     default:
//       return state;
//   }
// };

const Cta = () => {
  // scopes pentru permisiuni pe fb
  // public_profile,ads_management, instagram_basic, publish_video, leads_retrieval, pages_manage_engagement, publish_to_groups, pages_manage_ads, pages_show_list, Page Public Metadata Access, Oembed Read, Page Public Content Access

  // facebook sdk async
  const isFbSDKInitialized = useInitFbSDK();
  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = useState();

  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postLink, setPostLink] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [userProfilePic, setUserProfilePic] = useState();
  const [pages, setPages] = useState([]);
  const [pagesProfilePicture, setPagesProfilePicture] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [pagesGroup, setPagesGroup] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);

  // login to fb
  const logInToFB = React.useCallback(() => {
    window.FB.login(
      (response) => {
        if (response.status === 'connected') {
          setFbUserAccessToken(response.authResponse.accessToken);
        } else {
          throw new Error();
        }
      },
      {
        scope:
          'pages_show_list,pages_manage_ads, pages_manage_posts, pages_manage_metadata,pages_manage_engagement,pages_read_engagement, public_profile, ads_management, publish_video, leads_retrieval,  publish_to_groups, instagram_basic,instagram_content_publish, instagram_manage_comments ',
      }
    );
  }, []);

  // logout of facebook
  const logOutOfFB = React.useCallback(() => {
    window.FB.logout(() => {
      setFbUserAccessToken(null);
      // setFbPageAccessToken(null);
    });
  }, []);

  // Checks if the user is logged in to Facebook
  useEffect(() => {
    if (isFbSDKInitialized) {
      window.FB.getLoginStatus((response) => {
        setFbUserAccessToken(response.authResponse?.accessToken);
      });
    }
  }, [isFbSDKInitialized]);

  // Fetches an access token for the page
  useEffect(() => {
    if (fbUserAccessToken) {
      window.FB.api('/me', (response) => {
        setName(response.name);
        setUserId(response.id);
      });
    }
  }, [fbUserAccessToken]);

  //Fetches users fb pages
  useEffect(() => {
    if (userId) {
      window.FB.api(`/${userId}/accounts`, (response) => {
        if (response && !response.error) {
          setPages(response.data);
        }
      });
      window.FB.api(
        `/${userId}/picture`,
        {
          redirect: false,
          type: 'small',
        },
        (response) => {
          if (response && !response.error) {
            setUserProfilePic(response.data.url);
          }
        }
      );
      window.FB.api(`/${userId}/groups`, function (response) {
        if (response && !response.error) {
          setUserGroups(response.data);
        }
      });
    }
  }, [userId]);

  useEffect(() => {
    pages.forEach((page) =>
      window.FB.api(
        `/${page.id}/picture`,
        {
          type: 'large',
          access_token: page.access_token,
        },
        (response) => {
          if (response && !response.error) {
            setPagesProfilePicture([...pagesProfilePicture, response]);
          }
        }
      )
    );
  }, [pages, pagesProfilePicture]);

  // Publishes a post on the Facebook page
  const sendPostToPage = React.useCallback(() => {
    setIsPublishing(true);
    selectedPages.forEach((page) =>
      window.FB.api(
        `/${page.id}/feed`,
        'POST',
        {
          message: postText,
          access_token: page.access_token,
          link: postLink || '',
          url: postImage || '',
        },
        () => {
          setPostText('');
          setIsPublishing(false);
        }
      )
    );
  }, [selectedPages, postImage, postLink, postText]);

  const sendPostToGroup = React.useCallback(() => {
    setIsPublishing(true);
    userGroups.forEach((group) =>
      window.FB.api(
        `/${group.id}/feed`,
        'POST',
        {
          message: postText,
          link: postLink || '',
          url: postImage || '',
        },
        () => {
          setPostText('');
          setIsPublishing(false);
        }
      )
    );
  }, [postImage, postLink, postText, userGroups]);
  // console.log(selectedPages);

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append('file', file);

  //   try {
  //     dispatch({ type: 'UPLOAD_REQUEST' });
  //     const { data } = await axios.post('/api/upload', bodyFormData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     dispatch({ type: 'UPLOAD_SUCCESS' });

  //     setPostImage(data.secure_url);

  //     toast.success('Pozele au fost urcate cu succes.');
  //   } catch (err) {
  //     toast.error(getError(err));
  //     dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
  //   }
  // };

  const addAllHandler = () => {
    setSelectedPages(pages);
  };

  const deselectPage = (id) => {
    const newSelected = selectedPages.filter((item) => item.id !== id);
    setSelectedPages(newSelected);
  };

  const addPage = (page) => {
    const id = page.id;
    const duplicate = selectedPages.find((item) => item.id === id);
    if (!duplicate) {
      setSelectedPages([...selectedPages, page]);
    } else {
      toast.error('Pagina este deja aleasa');
    }
  };

  console.log(pagesProfilePicture);
  // schimabre profil la pagina
  const [selectedPage, setSelectedPage] = useState();

  const handlePageSelect = (page) => {
    // Utilizatorul a selectat o pagină pentru a o administra
    setSelectedPage(page);

    // Schimbăm profilul conectat cu acea pagină
    window.FB.api(
      `/${page.id}/?access_token=${page.access_token}`,
      'POST',
      {},
      (response) => {
        // Afisam notificare cu privire la schimbarea cu succes a profilului
        toast.success(
          `Profilul a fost schimbat cu succes pentru pagina ${page.name}!`
        );
      }
    );
  };
  return (
    <Stack>
      <Heading as={'h1'}>Test Area</Heading>

      {fbUserAccessToken ? (
        <>
          <Box
            w={'fit-content'}
            bg={'facebook.500'}
            borderRadius={'1rem'}
            color={'#fff'}
            fontWeight={'bold'}
            p={'1rem 1.5rem'}
            onClick={logOutOfFB}
          >
            Deconectare Facebook
          </Box>{' '}
          <Stack>
            <HStack>
              {selectedPage ? (
                <>
                  {' '}
                  <Text>Buna, {selectedPage.name}</Text>
                  <Avatar src={selectedPage.url} />
                </>
              ) : (
                <>
                  {' '}
                  <Text>Buna, {name}</Text>
                  <Avatar src={userProfilePic} />
                </>
              )}
              <Divider orientation="vertical" />
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    Alege pe ce pagini sa gestionezi <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Stack alignItems={'flex-start'}>
                      <Divider />
                      <Stack gap={'1rem'} alignItems={'flex-start'}>
                        {pages.map((page) => (
                          <Button
                            key={page.id}
                            variant={'ghost'}
                            onClick={() => {
                              handlePageSelect(page);
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
            </HStack>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  Alege pe ce pagini sa postezi <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Stack alignItems={'flex-start'}>
                    <Button
                      variant={'ghost'}
                      _hover={'none'}
                      _active={'none'}
                      onClick={addAllHandler}
                    >
                      Selecteaza tot
                    </Button>
                    <Divider />
                    <Stack gap={'1rem'} alignItems={'flex-start'}>
                      {pages.map((page) => (
                        <Button
                          key={page.id}
                          variant={'ghost'}
                          onClick={() => {
                            addPage(page);
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
            {selectedPages.length !== 0 && (
              <HStack w={['800px']} flexWrap={'wrap'}>
                {selectedPages.map((page) => (
                  <Stack key={page.id}>
                    <Avatar src={page.picture} />
                    <Text w={'80px'}>{page.name}</Text>
                    <DeleteIcon
                      color={'facebook.500'}
                      onClick={() => deselectPage(page.id)}
                    />
                  </Stack>
                ))}
              </HStack>
            )}
            {/* <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  Alege pe ce grupuri sa postezi <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {userGroups.map((page) => (
                    <HStack>
                      <Avatar src={page.url} />{' '}
                      <Text w={'fit-content'}>{page.name}</Text>
                    </HStack>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion> */}
            <Stack>
              <Heading as={'h2'}>Test postare</Heading>
              <Textarea
                value={postText}
                placeholder={'Introdu textul pentru postare'}
                rows={8}
                disabled={isPublishing}
                onChange={(e) => setPostText(e.target.value)}
              />
              <FormControl>
                <FormLabel>Adauga o imagine:</FormLabel>
                <Input
                  w={['300px', '500px']}
                  value={postImage}
                  onChange={(e) => setPostImage(e.target.value)}
                />
              </FormControl>
              <FormControl mb="2rem" w={'fit-content'}>
                <FormLabel htmlFor="image" fontWeight={'bold'}>
                  Schimba imaginea:
                </FormLabel>
                <Input
                  w={['300px', '500px']}
                  type={'file'}
                  // onChange={(e) => uploadFileHandler(e, false)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Intro link-ul:</FormLabel>
                <Input
                  type={'text'}
                  value={postLink}
                  onChange={(e) => setPostLink(e.target.value)}
                />
              </FormControl>

              <Button
                onClick={sendPostToPage}
                disabled={!postText || isPublishing}
              >
                Posteaza pe pagini
              </Button>
              <Button
                onClick={sendPostToGroup}
                disabled={!postText || isPublishing}
              >
                Posteaza pe grupuri
              </Button>
            </Stack>
          </Stack>
        </>
      ) : (
        <Box
          bg={'facebook.500'}
          borderRadius={'1rem'}
          color={'#fff'}
          fontWeight={'bold'}
          p={'1rem 1.5rem'}
          onClick={logInToFB}
        >
          Conectare Facebook
        </Box>
      )}
    </Stack>
  );
};

export default Cta;
