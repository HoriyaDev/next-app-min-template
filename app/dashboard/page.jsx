'use client'
import { Tabs, rem } from '@mantine/core';
import Banner1 from '../components/banner1/page'


export default function Dashboard() {
  

  return (
    <Tabs defaultValue="banner1" >
      <Tabs.List w={'max-content'} > 
        <Tabs.Tab value="banner1" fw={400} fz='19px' c='white' bg={'transparent'} >
          Banner 1
        </Tabs.Tab>
        <Tabs.Tab value="banner2"  fw={400} fz='19px' c='white' bg={'transparent'} >
          Banner 2
        </Tabs.Tab>
        <Tabs.Tab value="banner3"  fw={400} fz='19px' c='white' bg={'transparent'} >
          Banner 3
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="banner1" c='white'>
        <Banner1  />
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}