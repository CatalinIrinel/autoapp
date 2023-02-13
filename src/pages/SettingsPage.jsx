import { CloseIcon } from '@chakra-ui/icons';
import {
  Flex,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SettingsPage = () => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // insert key in array
  const [keyValue, setKeyValue] = useState('');
  const [pageKeys, setPageKeys] = useState([]);

  const deletePage = async (fileName) => {
    setPageKeys(pageKeys.filter((x) => x !== fileName));
    toast.success('Pagina a fost stearsa cu succes.');
  };

  const handleKeyChange = (e) => {
    setKeyValue(e.target.value);
  };

  const addPageKey = (e) => {
    e.preventDefault();
    setPageKeys([...pageKeys, keyValue]);
    setKeyValue('');
    toast.success('Pagina a fost adaugata cu succes.');
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastElement = currentPage * itemsPerPage;
  const indexofFirstElement = indexOfLastElement - itemsPerPage;
  const currentItems = pageKeys.slice(indexofFirstElement, indexOfLastElement);
  const numberOfPages = Math.ceil(pageKeys.length / itemsPerPage);
  return (
    <Flex>
      <chakra.form
        onSubmit={addPageKey}
        display={'flex'}
        flexDir={'column'}
        gap={'1rem'}
      >
        <FormControl w={'400px'}>
          <FormLabel htmlFor="input">Introdu codurile paginilor</FormLabel>
          <Flex gap={'1rem'}>
            <Input type={'text'} value={keyValue} onChange={handleKeyChange} />
            <Button
              type={'submit'}
              bg={'#fafafa'}
              color={'#0f0f0f'}
              px={'1.25rem'}
              py={'.3rem'}
              border={'1px solid #0f0f0f6c'}
            >
              Adauga
            </Button>
          </Flex>
        </FormControl>
        <FormControl>
          <FormLabel>Paginile dumneavoastra:</FormLabel>
          <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            minH={'25rem'}
            flexWrap={'wrap'}
            gap={'1rem'}
            mb={'1rem'}
          >
            {currentItems.map((page, index) => (
              <Flex
                key={index}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={'.5rem'}
                w={'350px'}
                h={'60px'}
                px={'.3rem'}
                borderRadius={'1rem'}
                border={'1px solid #0f0f0f6c'}
                boxShadow={'0 0 .7rem #0f0f0f34'}
              >
                <Image
                  borderRadius={'.8rem'}
                  boxSize={'50px'}
                  src={'/images/page.jpg'}
                />{' '}
                Denumirea paginii respective {page}
                <CloseIcon onClick={() => deletePage(page)} />
              </Flex>
            ))}
          </Box>
          <Flex gap={'1rem'}>
            {pageKeys.length > 0 && (
              <>
                {[...Array(numberOfPages).keys()].map((x) => (
                  <Button
                    _focus={{
                      bgColor: currentPage === x + 1 ? '#d1d1d1' : 'none',
                      fontWeight: 'bold',
                    }}
                    fontWeight={'normal'}
                    border={'1px solid #0f0f0f'}
                    px={'.8rem'}
                    py={'.3rem'}
                    borderRadius={'.5rem'}
                    bg={'#fafafa'}
                    color={'#0f0f0f'}
                    onClick={() => handlePaginationChange(x + 1)}
                  >
                    {x + 1}
                  </Button>
                ))}
              </>
            )}
          </Flex>
        </FormControl>
      </chakra.form>
    </Flex>
  );
};

export default SettingsPage;
