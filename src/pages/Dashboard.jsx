import { Flex } from '@chakra-ui/react';
import React from 'react';
import { DashSidebar } from '../components';

const Dashboard = () => {
  return (
    <Flex
      w={'full'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
    >
      <DashSidebar />
    </Flex>
  );
};

export default Dashboard;
