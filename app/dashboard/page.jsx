import React from 'react';
import { Header } from '../Component/header/page';
import { Container } from '@mantine/core';

const Dashboard = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'black' ,  minHeight: '100vh' , minWidth:'100vw' }}>
        <Header />
      </Container>
    </>
  );
};

export default Dashboard;
