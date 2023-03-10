import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Buttons } from '../components';
import { Store } from '../contexts/ContextProvider';
import { getError } from '../Utils';

const LoginPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/dashboard';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || 'https://app.autopost.ro');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <Flex
      w={'full'}
      flexDir={'column'}
      gap={'4rem'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Helmet>
        <title>Logare - Auto Post</title>
        {/* aici nu trebuie seo */}
      </Helmet>
      <Box display="flex" justifyContent="center" w="100%" fontSize="2.5rem">
        <Heading as="h1">Loghează-te</Heading>
      </Box>
      <form onSubmit={submitHandler}>
        <FormControl isRequired mb="2rem">
          <FormLabel htmlFor="email">Email:</FormLabel>
          <Input
            borderColor={'#000'}
            w="300px"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb="2rem">
          <FormLabel htmlFor="password">Parola:</FormLabel>
          <Input
            borderColor={'#000'}
            w="300px"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Box display="flex" justifyContent="center" w="100%">
          <Buttons type="submit" bg="brand" text={'Logare'} />
        </Box>
        <Box display="flex" justifyContent="center">
          Client Nou?&nbsp;
          <Link className="links" to={`/inregistrare?redirect=${redirect}`}>
            Crează-ți contul aici!
          </Link>
        </Box>
      </form>
    </Flex>
  );
};

export default LoginPage;
