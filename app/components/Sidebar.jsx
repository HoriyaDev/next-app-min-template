"use client";

import { Flex, AppShell, NavLink, Button } from "@mantine/core";
import Link from "next/link";
import "../style.css";
import { navbarData } from "../utils/constant";
import { useState } from "react";

export default function Sidebar() {
  const [activeId, setActiveId] = useState(null);

  return (
    <AppShell>
      <AppShell.Navbar
        p="md"
        w={{ lg: 270, sm: 200 }}
        withBorder={false}
        bg="black"
      >
        <Flex
          justify="flex-start"
          h="100vh"
          className="hide-scrollbar"
          direction="column"
        >
          {navbarData.map((item) => (
            <NavLink
              key={item.id}
              label={item.label}
              leftSection={
               
                <item.icon
                size={28}
                style={{
                  backgroundColor: item.iconBg,
                  color: item.iconColor,
                  borderRadius: "20%",
                  padding: "3px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                
              />
              
              }
              component={Link}
              href={item.path || "#"}
              className="navlink-hover"
             
            >
              {/* {item.category &&
                item.category.map((subItem, index) => (
                  <NavLink
                    key={`${item.id}-${index}`}
                    label={subItem.label}
                    component={Link}
                    bg={'transparent'}
                    href={subItem.path || "#"}
                    className={
                      activeId === subItem.id
                        ? "navlink-active"
                        : "navlink-hover"
                    }
                    onClick={() => setActiveId(subItem.id)}
                  />
                ))} */}
            </NavLink>
          ))}
        </Flex>
        
      </AppShell.Navbar>
    </AppShell>
  );
}
