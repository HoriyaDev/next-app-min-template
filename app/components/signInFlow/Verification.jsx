"use client";

import React from 'react';
import { Box, Button, PinInput, Group, Title, Image, Text, Flex, PinInputField } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Verification = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter()

  const handleVerify = () =>{
    router.push('/dashboard')

  }

  return (
    <Box w="100vw" h="100vh" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box style={{ backgroundColor: '#000D1E', maxWidth: 720, padding: '40px', borderRadius: '8px' }}>
        <Box style={{ margin: 'auto', textAlign: 'center' }}>
          <Image
            src="/gemhunters-horizontal-logo 1.png"
            alt="logo"
            fit="contain"
            width={120}
            height={35}
          />
        </Box>
        <Title c="white" size="h1" mx="10px" style={{ fontSize: '48px' }}>Two Factor Authentication</Title>
        <Text c="white" mx="60px" align="center">
          Please enter the OTP (One Time Password) to verify your account. A code has been sent to{' '}
          <span style={{ fontWeight: 700 }}>{email}</span>
        </Text>
        
   
        <Flex justify="center" align="center" my="60px">
          <PinInput size="lg" type="number">
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Flex>

        <Group position="right" mt="md">
          
            <Button
              type="button"
              c="#000D1E"
              fz="20px"
              px="295px"
              fullWidth
              style={{ backgroundColor: '#B2EFFD' }}
              onClick={handleVerify }
            >
              Verify
            </Button>
          
        </Group>

        <Text align="center" mt="md" c="white">
          Not Received your Code? 
          <span 
            style={{ 
              color: '#B2EFFD', 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              textDecoration: 'none' 
            }}
          >
            Resend Code
          </span>
        </Text>
      </Box>
    </Box>
  );
};

export default Verification;
