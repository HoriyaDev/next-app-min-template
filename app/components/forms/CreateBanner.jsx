'use client'


import React, { useState, useRef } from 'react';
import {
  Title,
  Box,
  Button,
  Group,
  Text,
  Center,
  Flex,
  Radio,
  Select,
} from '@mantine/core';
import { Image as MantineImage } from '@mantine/core';
import { IconArrowNarrowLeft, IconX, IconInfoCircle } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { Dropzone } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { options } from '../../utils/constant';
import '../../style.css';

export default function CreateBanner() {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [radioValue, setRadioValue] = useState('livestream');
  const router = useRouter();
  const openRef = useRef(null);

  const handleBack = () => {
    router.push('./');
  };

  const handleDrop = (files) => {
    const file = files[0];
    const image = new Image();
    const imageUrl = URL.createObjectURL(file);

    image.onload = () => {
      const { width, height } = image;
      if (width > 1312 || height > 520) {
        console.log('Dimensions exceeded'); 
        notifications.show({
          title: 'Invalid Dimensions',
          message: 'File dimensions exceed the allowed size of 1312x520 pixels.',
          color: 'red',
          icon: <IconX />,
        });
      } else {
        setFile(imageUrl);
        setShow(false); 
      }
    };

    image.src = imageUrl;
  };

  const handleClose = () => {
    setFile(null);
    setShow(true); 
  };

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
        <Title order={3} fw={600}>
          Banner Image
        </Title>
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
              onDrop={handleDrop}
              multiple={false}
              maxSize={3 * 1024 ** 2}
            >
              <Flex justify="center">
                {/* Conditionally render the button */}
                {show && (
                  <Button onClick={() => openRef.current()} bg={'#B2EFFD'} c={'black'}>
                    Select Files
                  </Button>
                )}
              </Flex>
            </Dropzone>

            {file && (
              <Flex
                bg={'#545D68'}
                w={'fit-content'}
                h={'fit-content'}
                gap="sm"
                justify="space-between"
                align="center"
                style={{ borderRadius: '20px' }}
                p={10}
              >
                <MantineImage
                  src={file}
                  alt="Preview"
                  withPlaceholder
                  caption="Selected image preview"
                  w={200}
                  h={100}
                />
                <IconX onClick={handleClose} cursor={'pointer'} />
              </Flex>
            )}
          </Box>
        </Center>
      </Box>

      {/* Radio Buttons for Linked With */}
      <Flex align="center" direction={'row'} mt={20}>
        <Title c={'white'} order={3}>
          Linked With
        </Title>
        <Group c={'white'} ml={20}>
          <Radio
            variant="outline"
            value="livestream"
            label="LiveStream"
            checked={radioValue === 'livestream'}
            onChange={() => handleRadioChange('livestream')}
          />
          <Radio
            variant="outline"
            value="gemreportes"
            label="Gem Reportes"
            checked={radioValue === 'gemreportes'}
            onChange={() => handleRadioChange('gemreportes')}
          />
          <Radio
            variant="outline"
            value="academy"
            label="Academy"
            checked={radioValue === 'academy'}
            onChange={() => handleRadioChange('academy')}
          />
        </Group>
      </Flex>

      {/* Select Dropdown */}
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
            color: 'white',
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
              backgroundColor: 'orange',
            },
          },
        }}
      />

      {/* Submit Button */}
      <Flex justify="flex-end" mt={20}>
        <Button variant="filled" bg="#B2EFFD" c="black">
          Create
        </Button>
      </Flex>
    </Box>
  );
}
