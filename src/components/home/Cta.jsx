import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useInitFbSDK } from '../../hooks/fbHooks';

const PAGE_ID = '112100934803055';

const Cta = () => {
  // scopes pentru permisiuni pe fb
  // public_profile,ads_management, instagram_basic, publish_video, leads_retrieval, pages_manage_engagement, publish_to_groups, pages_manage_ads, pages_show_list, Page Public Metadata Access, Oembed Read, Page Public Content Access

  // facebook sdk async
  const isFbSDKInitialized = useInitFbSDK();
  // App state
  const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const [longUserAccessToken, setLongUserAccessToken] = useState();
  const [fbPageAccessToken, setFbPageAccessToken] = useState();
  const [postText, setPostText] = useState();
  const [isPublishing, setIsPublishing] = useState(false);

  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [userProfilePic, setUserProfilePic] = useState();
  const [pages, setPages] = useState([]);
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
      setFbPageAccessToken(null);
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
    }
  }, [userId]);

  // Publishes a post on the Facebook page
  const sendPostToPage = React.useCallback(() => {
    setIsPublishing(true);
    pages.forEach((page) =>
      // console.log('The pages id is ', page.id)
      window.FB.api(
        `/${page.id}/feed`,
        'POST',
        {
          message: postText,
          access_token: page.access_token,
        },
        () => {
          setPostText('');
          setIsPublishing(false);
        }
      )
    );
  }, [pages, postText]);
  return (
    <Stack>
      <Heading as={'h1'}>Test Area</Heading>

      {fbUserAccessToken ? (
        <>
          <Box
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
              <Text>Buna, {name}</Text>
              <Avatar src={userProfilePic} />
            </HStack>

            <Stack>
              {' '}
              <Heading as={'h2'}>Test postare</Heading>{' '}
              <Textarea
                value={postText}
                placeholder={'Introdu textul pentru postare'}
                rows={8}
                disabled={isPublishing}
                onChange={(e) => setPostText(e.target.value)}
              />{' '}
              <Button
                onClick={sendPostToPage}
                disabled={!postText || isPublishing}
              >
                Posteaza
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
