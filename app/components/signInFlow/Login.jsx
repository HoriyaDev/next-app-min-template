// "use client";

// import React from 'react';
// import { Box, Button, Group, TextInput, Title, Image, Text } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { useRouter } from 'next/navigation';
// import Verfication  from './Verification'

// const Login = () => {
//   const router = useRouter();
  
//   const form = useForm({
//     initialValues: {
//       email: '',
//       termsOfService: false,
//     },
//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//     },
//   });

//   const handleSubmit = (values) => {
    
//     router.push(`/verification?email=${values.email}`);
//   };

//   return (
//     <Box w="100vw" h="100vh" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Box style={{ backgroundColor: '#000D1E', maxWidth: 440, padding: '40px', height: '400px', borderRadius: '8px' }}>
//         <Box style={{ margin: 'auto', textAlign: 'center' }}>
//           <Image
//             src="/gemhunters-horizontal-logo 1.png" 
//             alt="logo"
//             fit="contain" 
//             width={120} 
//             height={35} 
//           />
//         </Box>
//         <Title c="white" size="h1" style={{ margin: '20px 0' }}>WELCOME BACK</Title>
//         <Text c="white">Welcome to the Gem Hunters Admin Portal</Text>
//         <form onSubmit={form.onSubmit(handleSubmit)}>
//           <TextInput
//             styles={{
//               input: {
//                 backgroundColor: '#1A1F26',
//                 color: 'white',
//                 marginTop: '5px',
//                 padding: '25px', 
//                 fontSize: '15px' 
//               },
//             }} 
//             placeholder="Email Address"
//             {...form.getInputProps('email')}
//           />
//           <Group position="right" mt="md">
//             <Button
//               type="submit"
//               c="#000D1E"
//               fz="18px"
//               px="70px"
//               fullWidth
//               style={{ backgroundColor: '#B2EFFD' }}
//             >
//               Continue With Email
//             </Button>
//           </Group>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Login;


"use client";

import React, { useState } from 'react';
import { Box, Button, Group, TextInput, Title, Image, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import Verification from './Verification';

const Login = () => {
  const [showVerification, setShowVerification] = useState(false); // State to toggle between Login and Verification
  const [email, setEmail] = useState(''); // Store the email to pass to Verification

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
    setEmail(values.email); // Store the email
    setShowVerification(true); // Show the Verification component
  };

  // Conditional rendering
  if (showVerification) {
    return <Verification email={email} />; // Pass the email to the Verification component
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
          height: '400px',
          borderRadius: '8px',
        }}
      >
        <Box style={{ margin: 'auto', textAlign: 'center' }}>
          <Image
            src="/gemhunters-horizontal-logo 1.png"
            alt="logo"
            fit="contain"
            width={120}
            height={35}
          />
        </Box>
        <Title c="white" size="h1" style={{ margin: '20px 0' }}>
          WELCOME BACK
        </Title>
        <Text c="white">Welcome to the Gem Hunters Admin Portal</Text>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            styles={{
              input: {
                backgroundColor: '#1A1F26',
                color: 'white',
                marginTop: '5px',
                padding: '25px',
                fontSize: '15px',
              },
            }}
            placeholder="Email Address"
            {...form.getInputProps('email')}
          />
          <Group position="right" mt="md">
            <Button
              type="submit"
              c="#000D1E"
              fz="18px"
              px="70px"
              fullWidth
              style={{ backgroundColor: '#B2EFFD' }}
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

