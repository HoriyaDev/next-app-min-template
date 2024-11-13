
'use client'


import React, { useState } from 'react';
import { Container, Avatar, UnstyledButton, Group, Box, Image, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconHeart, IconStar, IconMessage, IconSettings, IconSwitchHorizontal, IconLogout, IconPlayerPause, IconTrash } from '@tabler/icons-react';
import { useMantineTheme } from '@mantine/core';
import { rem } from '@mantine/core';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export function Header() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div>
      <Container size="md">
        <Group position="apart" align="center">
          {/* Left Side: Logo */}
          <Box style={{ textAlign: 'left' }}>
            <Image
              src="/gemhunters-horizontal-logo 1.png"
              alt="logo"
              fit="contain"
              width={120}
              height={35}
            />
          </Box>

          {/* Right Side: User Avatar and Menu */}
          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton>
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={40} />
                  <IconChevronDown style={{ width: rem(12), height: rem(12), color: 'white' }} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconHeart
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                }
              >
                Liked posts
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconStar
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[6]}
                    stroke={1.5}
                  />
                }
              >
                Saved posts
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconMessage
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                    stroke={1.5}
                  />
                }
              >
                Your comments
              </Menu.Item>
              <Menu.Label>Settings</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Account settings
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Change account
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Logout
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item
                leftSection={
                  <IconPlayerPause style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Pause subscription
              </Menu.Item>
              <Menu.Item
                color="red"
                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              >
                Delete account
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
