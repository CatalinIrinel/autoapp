import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import React, { useEffect, useReducer, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useInitFbSDK } from '../../hooks/fbHooks';
import { getError } from '../../Utils';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
};

const Cta = () => {
  const [{ error, loadingUpdate }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const navigate = useNavigate();
  // scopes pentru permisiuni pe fb
  // public_profile,ads_management, instagram_basic, publish_video, leads_retrieval, pages_manage_engagement, publish_to_groups, pages_manage_ads, pages_show_list, Page Public Metadata Access, Oembed Read, Page Public Content Access

  // facebook sdk async
  const isFbSDKInitialized = useInitFbSDK();

  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = useState();

  // posts data
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState('');
  const [postLink, setPostLink] = useState('');
  const [isPublishing, setIsPublishing] = useState(false);

  // user data
  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [userProfilePic, setUserProfilePic] = useState();
  const [userGroups, setUserGroups] = useState([]);

  // pages data
  const [pages, setPages] = useState([]);
  // const [pagesProfilePicture, setPagesProfilePicture] = useState([]);
  const [selectedPages, setSelectedPages] = useState([]);
  // const [schedulePost, setSchedulePost] = useState('');

  //pages group
  // const [pageGroups, setPageGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);

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
          'pages_show_list, pages_manage_ads, pages_manage_posts, pages_manage_metadata, pages_manage_engagement, pages_read_engagement, public_profile, ads_management, publish_video, leads_retrieval,  publish_to_groups, instagram_basic, instagram_content_publish, instagram_manage_comments ',
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

  // Fetches an access token for the pages
  useEffect(() => {
    if (fbUserAccessToken) {
      window.FB.api('/me', (response) => {
        setName(response.name);
        setUserId(response.id); //userid for access
      });
    }
  }, [fbUserAccessToken]);

  //Fetches users fb pages, profile picture and user groups
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
      window.FB.api(`/${userId}/groups`, (response) => {
        if (response && !response.error) {
          setUserGroups(response.data);
        }
      });
    }
  }, [userId]);

  // gets fb page profile picture
  // useEffect(() => {
  //   pages.forEach((page) =>
  //     window.FB.api(
  //       `/${page.id}/picture`,
  //       {
  //         redirect: '0',
  //       },
  //       (response) => {
  //         if (response && !response.error) {
  //           // console.log(response.data);
  //         }
  //       }
  //     )
  //   );
  // }, [pages, pagesProfilePicture]);

  // console.log(pagesProfilePicture);
  // Publishes a post on the Facebook pages
  const sendPostToPage = React.useCallback(() => {
    setIsPublishing(true);
    if (postImage) {
      selectedPages.forEach((page) =>
        window.FB.api(
          `/${page.id}/photos`,
          'POST',
          {
            message: postText,
            access_token: page.access_token,
            url: `https://api.autopost.ro/${postImage}`,
          },
          () => {
            setPostText('');
            setIsPublishing(false);
          }
        )
      );
    } else {
      selectedPages.forEach((page) =>
        window.FB.api(
          `/${page.id}/feed`,
          'POST',
          {
            message: postText,
            access_token: page.access_token,
            link: postLink || '',
          },
          () => {
            setPostText('');
            setIsPublishing(false);
          }
        )
      );
    }
  }, [selectedPages, postImage, postLink, postText]);

  // const schedulePostToPage = React.useCallback(() => {
  //   setIsPublishing(true);
  //   // console.log('Is not disabled pages');
  //   if (postImage) {
  //     selectedPages.forEach((page) =>
  //       window.FB.api(
  //         `/${page.id}/photos`,
  //         'POST',
  //         {
  //           message: postText,
  //           access_token: page.access_token,
  //           url: `https://api.autopost.ro/${postImage}`,
  //           published: false,
  //           scheduled_publish_time: schedulePost,
  //         },
  //         () => {
  //           setPostText('');
  //           setIsPublishing(false);
  //         }
  //       )
  //     );
  //   } else {
  //     selectedPages.forEach((page) =>
  //       window.FB.api(
  //         `/${page.id}/feed`,
  //         'POST',
  //         {
  //           message: postText,
  //           access_token: page.access_token,
  //           link: postLink || '',
  //           published: false,
  //           scheduled_publish_time: schedulePost,
  //         },
  //         () => {
  //           setPostText('');
  //           setIsPublishing(false);
  //         }
  //       )
  //     );
  //   }
  // }, [selectedPages, postText, postLink, postImage, schedulePost]);

  // Publishes a post on the Facebook groups
  const sendPostToGroup = React.useCallback(() => {
    setIsPublishing(true);
    // console.log('Is not disabled groups');

    if (postImage) {
      selectedGroups.forEach((group) =>
        window.FB.api(
          `/${group.id}/photos`,
          'POST',
          {
            message: postText,
            url: `https://api.autopost.ro/${postImage}`,
          },
          () => {
            setPostText('');
            setIsPublishing(false);
          }
        )
      );
    } else {
      selectedGroups.forEach((group) =>
        window.FB.api(
          `/${group.id}/feed`,
          'POST',
          {
            message: postText,
            link: postLink || '',
          },
          () => {
            setPostText('');
            setIsPublishing(false);
          }
        )
      );
    }
  }, [postImage, postLink, postText, selectedGroups]);

  // const Link = 'https://api.autopost.ro';
  const Link = 'http://localhost:5000';

  // Server side upload
  // const uploadFileHandler = async (e) => {
  //   const image = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append('imageName', image.name);
  //   bodyFormData.append('imageData', image);

  //   try {
  //     dispatch({ type: 'UPLOAD_REQUEST' });
  //     const { data } = await axios.post(`${Link}/api/uploads`, bodyFormData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //         'Access-Control-Allow-Origin': 'https://localhost:3000',
  //         // Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     });
  //     dispatch({ type: 'UPLOAD_SUCCESS' });

  //     setPostImage(data.imageData);
  //     toast.success('Poza au fost urcata cu succes.');
  //   } catch (err) {
  //     toast.error(getError(err));
  //     dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
  //   }
  // };

  // Cloud Side Upload
  const uploadCloudHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);

    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post(`/api/uploads`, bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });

      toast.success('Imagine adaugata cu succes');
      setPostImage(data.secure_url);
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
    }
  };

  const addAllPages = () => {
    if (selectedPages.length !== 50) {
      setSelectedPages(pages);
    } else {
      toast.info('Poti selecta maxim 50 de pagini');
    }
  };

  const addAllGroups = () => {
    if (selectedGroups.length !== 50) {
      setSelectedGroups(pages);
    } else {
      toast.info('Poti selecta maxim 50 de grupuri');
    }
  };

  const deselectPage = (id) => {
    const newSelected = selectedPages.filter((item) => item.id !== id);
    setSelectedPages(newSelected);
  };
  const deselectGroup = (id) => {
    const newSelected = selectedGroups.filter((item) => item.id !== id);
    setSelectedGroups(newSelected);
  };

  const addPage = (page) => {
    const id = page.id;
    const duplicate = selectedPages.find((item) => item.id === id);
    if (selectedPages.length !== 50) {
      if (!duplicate) {
        setSelectedPages([...selectedPages, page]);
      } else {
        toast.error('Pagina este deja aleasa');
      }
    } else {
      toast.info('Poti selecta maxim 50 de pagini');
    }
  };

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

  // schimabre profil la pagina
  const [selectedPage, setSelectedPage] = useState();

  const handlePageSelect = (page) => {
    // Utilizatorul a selectat o pagină pentru a o administra
    setSelectedPage(page);
    // Schimbăm profilul conectat cu acea pagină
    window.FB.api(`/${page.id}?fields=access_token`, 'GET', (response) => {
      // Afisam notificare cu privire la schimbarea cu succes a profilului

      if (response && !response.error) {
        toast.success(
          `Profilul a fost schimbat cu succes pentru pagina ${page.name}!`
        );
        navigate('/facebook-post');
      } else {
        toast.error(response.error);
      }
    });
  };

  return (
    <Stack>
      <Heading as={'h1'}>Test Area</Heading>

      {!loadingUpdate && !error && fbUserAccessToken ? (
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
            <HStack alignItems={'flex-start'}>
              {selectedPage ? (
                <>
                  {' '}
                  <Text>Buna, {selectedPage.name}</Text>
                  <Avatar src={selectedPage.url} />
                  <Button variant={'ghost'} onClick={() => setSelectedPage('')}>
                    Schimba pe utilizator
                  </Button>
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
                    Alege pe ce pagina sa gestionezi <AccordionIcon />
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
                            <Avatar name={page.name} src={''} />
                            <Text>{page.name}</Text>
                          </Button>
                        ))}
                      </Stack>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </HStack>
            {!selectedPage && (
              <Accordion w={['500px']} allowMultiple>
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
                        onClick={addAllPages}
                      >
                        Selecteaza primele 50
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
            )}
            {selectedPages.length !== 0 && (
              <HStack w={['500px']} flexWrap={'wrap'}>
                {selectedPages.map((page) => (
                  <Stack key={page.id}>
                    <Avatar src={page.picture} />

                    <DeleteIcon
                      color={'facebook.500'}
                      onClick={() => deselectPage(page.id)}
                    />
                  </Stack>
                ))}
              </HStack>
            )}
            {!selectedPage && (
              <>
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
                          onClick={addAllGroups}
                        >
                          Selecteaza primele 50
                        </Button>
                        <Divider />
                        <Stack gap={'1rem'} alignItems={'flex-start'}>
                          {userGroups.map((page) => (
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
              </>
            )}

            {selectedPage && <></>}

            <form>
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
                    type={'file'}
                    onChange={uploadCloudHandler}
                  />
                </FormControl>
                {postImage && (
                  <FormControl>
                    <Image
                      w={'500px'}
                      h={'300px'}
                      src={`${postImage}`}
                      objectFit={'contain'}
                      alt={'Imagine facebook postare'}
                    />
                  </FormControl>
                )}
                <FormControl>
                  <FormLabel>Introdu link-ul:</FormLabel>
                  <Input
                    type={'text'}
                    w={['300px', '500px']}
                    value={postLink}
                    onChange={(e) => setPostLink(e.target.value)}
                  />
                </FormControl>
              </Stack>
            </form>
          </Stack>
          <HStack>
            <Button
              w={'fit-content'}
              onClick={sendPostToPage}
              isDisabled={
                !postText ||
                isPublishing ||
                selectedPages.length === 0 ||
                selectedGroups.length > 0
              }
            >
              Posteaza pe pagini
            </Button>
            {/* <Button
              w={'fit-content'}
              onClick={schedulePostToPage}
              isDisabled={
                !postText ||
                isPublishing ||
                selectedPages.length === 0 ||
                selectedGroups.length > 0
              }
            >
              Programeaza pe pagini
            </Button> */}
          </HStack>
          <Button
            w={'fit-content'}
            onClick={sendPostToGroup}
            isDisabled={
              !postText ||
              isPublishing ||
              selectedGroups.length === 0 ||
              selectedPages.length > 0
            }
          >
            Posteaza pe grupuri
          </Button>
        </>
      ) : (
        <Button
          _hover={'none'}
          _active={'none'}
          bg={'facebook.500'}
          borderRadius={'1rem'}
          color={'#fff'}
          fontWeight={'bold'}
          p={'1rem 1.5rem'}
          onClick={logInToFB}
        >
          Conectare Facebook
        </Button>
      )}
    </Stack>
  );
};

export default Cta;
