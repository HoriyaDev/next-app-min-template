

"use client";

import React from 'react';
import { Box, Button, Checkbox, Group, TextInput, Title, Image , Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';

const Login = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box w="100vw" h="100vh" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box style={{ backgroundColor: '#000D1E', maxWidth: 440,padding: '40px', height:'400px', borderRadius: '8px' }}>
        <Box style={{ margin: 'auto', textAlign: 'center' }}>
          <Image
            src="/gemhunters-horizontal-logo 1.png" 
            alt="logo"
            fit="contain" 
            width={120} 
            height={35} 
          />
        </Box>
        <Title c='white' size='h1' style={{ margin: '20px 0' }}>WELCOME BACK</Title>
        <Text c='white'>Welcome to the Gem Hunters Admin Portal</Text>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
  styles={{
    input: {
      backgroundColor: '#1A1F26',
      color: 'white',
      marginTop: '5px',
      padding: '25px', 
      fontSize:'15px' 
    },
  }} 
  placeholder="Email Address"
  {...form.getInputProps('email')}
/>

          <Group position="right" mt="md"> 
  <Link href='/verification'>
  
  <Button 
    type="submit" 
    c="#000D1E" 
    fz="18px" 
    py="10px" 
    px="70px"
    fullWidth 
    style={{ backgroundColor: '#B2EFFD' }}
  >
    Continue With Email
  </Button>
  </Link>
</Group>
        </form>
      </Box>
    </Box>
  );
}

export default Login;