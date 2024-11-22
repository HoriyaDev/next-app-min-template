'use client';

import React, { useState, useRef } from 'react';
import { Title, Box, Button, Group, Text, Center, Flex, Radio, Select, Image } from '@mantine/core';
import { IconArrowNarrowLeft , IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { Dropzone } from '@mantine/dropzone';
import { options } from '../../utils/constant';
import '../../style.css';

export default function CreateBanner() {

    const [image, setImage] = useState(null);

  const [selectedOption, setSelectedOption] = useState('');
  const [radioValue, setRadioValue] = useState('');
  const router = useRouter();
  const openRef = useRef(null);

  const handleBack = () => {
    router.push('./');
  };

  const handleDrop = (files) => {
    const file = files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleClose = () =>{
    setImage(null)

  }
      const handleRadioChange = (value) => {
        setRadioValue(value); 
        setSelectedOption(null); 
    };


  return (
    <Box w="96%" style={{ color: 'white' }}>
      {/* Header Section */}
      <Title order={1} fw={900}>
        <IconArrowNarrowLeft size={30} onClick={handleBack} /> Add New Banner
      </Title>

     
      <Box mt={15}>
        <Title order={3} fw={600}>Banner Image</Title>
        <Text c="#868E96">File dimensions should be: 1312x520 pixels</Text>
        <Center mt={10}>
          <Box
            bg="#1A1F26"
            p={10}
            style={{
              border: '2px dashed #868E96',
              borderRadius: '4px',
              width: '100%',
            }}
          >
            <Dropzone
              openRef={openRef}
              accept={['image/png', 'image/jpeg', 'image/svg+xml', 'image/gif']}
              onDrop={(files) => handleDrop(files)}
              multiple={false}
              
            >
             
              <Flex justify="center" >
              <Button onClick={() => openRef.current()} bg={'#B2EFFD'} c={'black'}>Select Files</Button>
            </Flex>
            </Dropzone>
           

           {image && (
       <>
        <Flex bg={'#545D68'} w={'max-content'}  h={'max-content'} justify={'center'} align={'center'} p={15} style={{borderRadius:'20px'}}>

        <Image
          src={image}
          alt="Preview"
         
          radius="md"
          withPlaceholder
          caption="Selected image preview"
          w={250}
          h={150}
        />
        
        <Button onClick={handleClose} bg={'transparent'}><IconX /> </Button>
        </Flex>
       
       </>
      )}
           
          </Box>
        </Center>
      </Box>
      <Flex align="center" direction={'row'} mt={20}>
                     <Title c={'white'} order={3}>Linked With</Title>
                    <Group c={'white'} ml={20}>
                       <Radio 
                            variant="outline" 
                            value="livestream" 
                            label="LiveStream"
                            checked={radioValue === 'livestream'} 
                            onChange={() => handleRadioChange('livestream')} 
                            styles={{
                                radio: {
                                    backgroundColor: 'black' // Customize the radio button
                                },
                            }}
                        />
                        <Radio 
                            variant="outline" 
                            value="gemreportes" 
                            label="Gem Reportes" 
                            checked={radioValue === 'gemreportes'} 
                            onChange={() => handleRadioChange('gemreportes')} 
                            styles={{
                                radio: {
                                    backgroundColor: 'black' // Customize the radio button
                                },
                            }}
                        />
                        <Radio 
                            variant="outline" 
                            value="academy" 
                            label="Academy" 
                            checked={radioValue === 'academy'} 
                            onChange={() => handleRadioChange('academy')} 
                            styles={{
                                radio: {
                                    backgroundColor: 'black' // Customize the radio button
                                },
                            }}
                        />
                    </Group>
                </Flex>

                <Select
                    value={selectedOption}
                    onChange={setSelectedOption}
                    data={radioValue ? options[radioValue] : []}
                    placeholder="Select an option"
                    styles={{
                       
                        input: {
                            backgroundColor: '#1A1F26', 
                            borderRadius: '8px',
                            padding: '8px',
                            color:'white'
                        },
                       
                        dropdown: {
                            backgroundColor: '#1A1F26', 
                        },
                        
                        item: {
                            '&[data-selected]': {
                                backgroundColor: 'green',
                                color: 'white', 
                            },
                            '&:hover': {
                                backgroundColor:'orange', 
                            },
                        },
                    }}
                />


      {/* Submit Button */}
      <Flex justify="flex-end" mt={20}>
        <Button variant="filled" bg="#B2EFFD" c="black" >
          Create
        </Button>
      </Flex>
    </Box>
  );
}
