import {
  Box,
  FormControl,
  FormLabel,
  chakra,
  // Input,
  Button,
  // Select,
  // Flex,
} from '@chakra-ui/react';
// import axios from 'axios';
import React from 'react';
// import { useCallback, useEffect, useReducer, useState } from 'react';
// import { toast } from 'react-toastify';
import MessageBox from '../components/MessageBox';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, projects: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

const FbPostPage = () => {
  // const [{ loading, error, pages, groups }, dispatch] = useReducer(reducer, {
  //   loading: true,
  //   error: '',
  //   pages: [],
  //   groups: [],
  // });

  const postHandler = () => {
    console.log('it works');
  };

  return (
    <Box w={'full'} py={'4rem'}>
      <chakra.form
        display={'flex'}
        flexDir={'column'}
        gap={'3rem'}
        onSubmit={postHandler}
      >
        <FormControl isRequired>
          <FormLabel>Alege Paginile: </FormLabel>

          <MessageBox status={'error'}>
            Acest cont nu detine pagini pe care posta
          </MessageBox>
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
