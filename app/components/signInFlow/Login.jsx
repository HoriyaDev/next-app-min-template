



"use client";

import React, { useState } from 'react';
import { Box, Button, Group, TextInput, Title, Image, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Verification from './Verification';

const Login = () => {
  const [showVerification, setShowVerification] = useState(false); // State to toggle between Login and Verification
  const [email, setEmail] = useState(''); // Store the email to pass to Verification
  const router = useRouter(); // Initialize the router

  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = (values) => {
    setEmail(values.email);
    setShowVerification(true);
    
    
    router.push(`?email=${values.email}`);
  };

  if (showVerification) {
    return <Verification email={email} />;
  }

  return (
    <Box
      w="100vw"
      h="100vh"
      style={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          backgroundColor: '#000D1E',
          maxWidth: 440,
          padding: '40px',
          height: 'auto',
          borderRadius: '8px',
        }}
      >
        <Box ta={'center'} style={{ margin: 'auto' }}>
          <Image
            src="/gemhunters-horizontal-logo 1.png"
            alt="logo"
            fit="contain"
            width={120}
            height={35}
          />
        </Box>
        <Title c="white" size={40} textAlign='center'>
          WELCOME BACK
        </Title>
        <Text c="white" mt={3} fz={15} ta='center' ml={10}>Welcome to the Gem Hunters Admin Portal</Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            styles={{
              input: {
                backgroundColor: '#1A1F26',
                color: 'white',
                marginTop: '20px',
                padding: '20px',
                fontSize: '15px',
              },
            }}
            placeholder="Email Address"
            {...form.getInputProps('email')}
          />
          <Group position="right" mt="md">
            <Button
              variant="filled"
              type="submit"
              color="#B2EFFD"
              fz="18px"
              px="70px"
              mt={10}
              fullWidth
              styles={{ root: { color: 'black' } }}
            >
              Continue With Email
            </Button>
          </Group>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
