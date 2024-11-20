"use client";

import {
  Flex,
  AppShell,
  Box,
  NavLink,
} from "@mantine/core";
import Link from "next/link";
import '../style.css';
import { useRouter } from "next/navigation";

import { IconSection  , IconLivePhoto,IconClipboardText , IconFileText, IconUserCog, IconSettings} from "@tabler/icons-react";

export default function Sidebar() {
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  return (
    <AppShell>
      <AppShell.Navbar
        p="md"
        w={{ lg: 270, sm: 200 }}
        withBorder={""}
        bg={"black"}
      >
        <Flex
          justify={"space-between"}
          h={"100vh"}
          className="hide-scrollbar"
          direction={"column"}
        >
          <Box>
            <NavLink
              href="#"
              label="Banners"
              c="white"
              fw={400}
              component={Link}
              className="navlink-hover"
              leftSection={<IconSection size="28px" stroke={2.5} color="black"  className="icon-background" />}
              
            >
              <NavLink
                component={Link}
                href="/dashboard/BannerHome"
                label="Home"               
                bg={'transparent'}
             className="navlink-active"
                
                
                
                
              />
              <NavLink
                component={Link}
                href="/dashboard/BannerLivestreams"
                label="Livestreams"
                className="navlink-active"
                bg={'transparent'}
               
              />
              <NavLink
                component={Link}
                href="/dashboard/BannerGemreporters"
                label="Gem reporters"
                
                bg={'transparent'}
                className="navlink-active"
              />
              <NavLink
                component={Link}
                href="/dashboard/BannerAcademy"
                label="Academy"
               className="navlink-active"
                bg={'transparent'}
              />
            </NavLink>

            {/* Other Links */}
            <NavLink
              href="/dashboard/livestreams"
              label="Livestreams"
              c="white"
              fw={400}
              mt={4}
           
              component={Link}
              leftSection={<IconLivePhoto size="28px" stroke={2.5} color="#40C057"  className="icon-background" />}
              className="navlink-hover"
            />

            <NavLink
              href="/dashboard/gemreporters"
              label="Gem reporters"
              c="white"
              fw={400}
              mt={4}
              fz={14}
              component={Link}
              leftSection={<IconClipboardText size="28px" stroke={2.5} color="#7950F2"  className="icon-background"  />}
              className="navlink-hover"
              
            />

            <NavLink
              href="/dashboard/academy"
              label="Academy"
              c="white"
              fw={400}
              mt={4}
              fz={14}
              component={Link}
              leftSection={<IconFileText size="28px" stroke={2.5} color="#1A1F26" bg='red'  className="icon-background"  />}
              className="navlink-hover"
            />

            <NavLink
          
              href="/dashboard/users"
              label="Users"
              c="white"
              fw={400}
              mt={4}
              fz={14}
              component={Link}
             className="navlink-hover"
             leftSection={<IconUserCog size="28px" stroke={2.5} color="#BE4BDB" bg='#EBFBEE' className="icon-background" />}
            />

            <NavLink
              href="/dashboard/settings"
              label="Settings"
              c="white"
              fw={400}
              mt={4}
              fz={14}
              component={Link}
              className="navlink-hover"
              leftSection={<IconSettings size="28px" stroke={2.5} color="#15AABF"  className="icon-background" />}
            />
          </Box>
        </Flex>
      </AppShell.Navbar>
    </AppShell>
  );
}