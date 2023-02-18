import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Buttons } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { getError } from '../Utils';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(useStateContext);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
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
    <Flex w={'full'} flexDir={'column'}>
      <Helmet>
        <title>Inregistrare - Babyfie</title>
      </Helmet>
      <Flex minH={'60vh'} flexDirection="column" alignItems="center">
        <Box
          mb="3rem"
          display="flex"
          justifyContent="center"
          w="100%"
          fontSize="2.5rem"
        >
          <Heading as="h1"> Crează contul tău Babyfie</Heading>
        </Box>
        <form onSubmit={submitHandler}>
          <FormControl isRequired mb="2rem">
            <FormLabel htmlFor="name">Nume Complet:</FormLabel>
            <Input
              borderColor={'#000'}
              w="300px"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

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
            <FormLabel htmlFor="password">Parolă:</FormLabel>
            <Input
              borderColor={'#000'}
              w="300px"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired mb="2rem">
            <FormLabel htmlFor="password">Confirmă Parola:</FormLabel>
            <Input
              borderColor={'#000'}
              w="300px"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <CheckboxGroup colorScheme={'green'}>
              <Stack spacing={[1, 5]} direction={'column'}>
                <Checkbox value={'tac'} borderColor={'#000'}>
                  Sunt de acord cu{' '}
                  <Link to="/termeni-conditii" className="policyLink">
                    Termenii și Condițiile
                  </Link>
                </Checkbox>
                <Checkbox value={'gdpr'} borderColor={'#000'}>
                  Sunt de acord cu{' '}
                  <Link to="/gdpr" className="policyLink">
                    Politica GDPR
                  </Link>
                </Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <Box display="flex" justifyContent="center" w="100%">
            <Buttons type="submit" text={'Crează Contul'} bg="brand" />
          </Box>

          <Box display="flex" justifyContent="center">
            Ai deja cont Auto Post?&nbsp;
            <Link className="links" to={`/logare?redirect=${redirect}`}>
              {' '}
              Loghează-te aici
            </Link>
          </Box>
        </form>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
