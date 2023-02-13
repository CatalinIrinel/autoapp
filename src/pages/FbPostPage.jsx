import {
  Box,
  FormControl,
  FormLabel,
  chakra,
  Input,
  Button,
  Select,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import MessageBox from '../components/MessageBox';

// scripts for posting
const injectFbSDKScript = () => {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

export const useInitFbSDK = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  // Initializes the SDK once the script has been loaded
  // https://developers.facebook.com/docs/javascript/quickstart/#loading
  window.fbAsyncInit = function () {
    window.FB.init({
      // Find your App ID on https://developers.facebook.com/apps/
      appId: '1239358320322409',
      cookie: true,
      xfbml: true,
      version: 'v8.0',
    });

    window.FB.AppEvents.logPageView();
    setIsInitialized(true);
  };

  injectFbSDKScript();

  return isInitialized;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, projects: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const FbPostPage = () => {
  const [{ loading, error, pages, groups }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    pages: [],
    groups: [],
  });
  // fb logic

  const [fbUserAccessToken, setFbUserAccessToken] = useState();
  const [fbPageAccessToken, setFbPageAccessToken] = useState();
  const [postText, setPostText] = useState();
  const [isPublishing, setIsPublishing] = useState(false);
  const isFbSDKInitialized = useInitFbSDK();

  // Logs in the current Facebook user
  const logInToFB = useCallback(() => {
    window.FB.login((response) => {
      setFbUserAccessToken(response.authResponse.accessToken);
    });
  }, []);

  // Logs out the current Facebook user
  const logOutOfFB = useCallback(() => {
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
      window.FB.api('/me', function (response) {
        setFbPageAccessToken(response.id);
      });
    }
  }, [fbUserAccessToken]);

  // Publishes a post on the Facebook page
  const sendPostToPage = useCallback(() => {
    setIsPublishing(true);

    window.FB.api(
      `/${pages}/feed`,
      'POST',
      {
        message: postText,
        access_token: fbPageAccessToken,
      },
      () => {
        setPostText('');
        setIsPublishing(false);
      }
    );
  }, [pages, postText, fbPageAccessToken]);
  // end of fb logic

  useEffect(() => {
    const fetchData = async () => {
      dispatchEvent({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/pagesData');
        dispatchEvent({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatchEvent({ type: 'FETCH_FAIL' });
      }
    };
  }, []);
  const postHandler = () => {
    console.log('it works');
  };

  return (
    <Box w={'full'} py={'4rem'}>
      <Flex>
        <div
          class="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true"
        ></div>
      </Flex>
      <chakra.form
        display={'flex'}
        flexDir={'column'}
        gap={'3rem'}
        onSubmit={postHandler}
      >
        <FormControl isRequired>
          <FormLabel>Alege Paginile:</FormLabel>

          {pages.length !== 0 ? (
            <Select variant={'flushed'}>
              {pages.map((page) => (
                <option value={page.pageCode}>{page.title}</option>
              ))}
            </Select>
          ) : (
            <MessageBox status={'error'}>
              Acest cont nu detine pagini pe care posta
            </MessageBox>
          )}
        </FormControl>
        <FormControl>
          <Button bgColor={'secondary'} color={'textLight'} type={'submit'}>
            Postează
          </Button>
        </FormControl>
      </chakra.form>
    </Box>
  );
};

export default FbPostPage;
