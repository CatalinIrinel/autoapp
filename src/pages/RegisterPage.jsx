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
  chakra,
  HStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Buttons } from '../components';
import { State } from '../contexts/ContextProvider';
import { getError } from '../Utils';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(State);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        firstName,
        lastName,
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
          <Heading as="h1"> Usureaza-ti munca cu Auto Post</Heading>
        </Box>

        <chakra.form
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          gap={'2rem'}
          flexDir={'column'}
          onSubmit={submitHandler}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input
              borderColor={'#000'}
              w="300px"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Parolă:</FormLabel>
              <Input
                borderColor={'#000'}
                w="300px"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="password">Confirmă Parola:</FormLabel>
              <Input
                borderColor={'#000'}
                w="300px"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl isRequired>
              <FormLabel htmlFor="lastname">Numele:</FormLabel>
              <Input
                borderColor={'#000'}
                w="300px"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="surname">Prenumele:</FormLabel>
              <Input
                borderColor={'#000'}
                w="300px"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
          </HStack>

          <FormControl isRequired>
            <CheckboxGroup colorScheme={'green'}>
              <Stack spacing={[1, 5]} direction={'column'}>
                <Checkbox value={'tac'} id="tac" borderColor={'#000'}>
                  Sunt de acord cu{' '}
                  <Link to="/termeni-conditii" className="policyLink">
                    Termenii și Condițiile
                  </Link>
                </Checkbox>
                <Checkbox value={'gdpr'} id="gdpr" borderColor={'#000'}>
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
              Loghează-te aici
            </Link>
          </Box>
        </chakra.form>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
