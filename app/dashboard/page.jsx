'use client'
import { Tabs, Button } from '@mantine/core';
import Banner1 from '../components/Banners/Banner1'
import Banner2 from '../components/Banners/Banner2'
import Banner3 from '../components/Banners/Banner3'
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import {IconPlus} from '@tabler/icons-react'

export default function Dashboard() {

  const [banner, setBanner] = useState({
    banner1: null,
    banner2: null,
    banner3: null,
  });
  const [selectedBanner, setSelectedBanner] = useState('banner1');
  const searchParams = useSearchParams();
  const data = searchParams.get('data');
  const bannerData = data ? JSON.parse(data) : null;
  const router = useRouter()

const handleBanner = (banner)=>{

  setSelectedBanner(banner.value)
  router.push('/dashboard/NewBanner')
  


}

  return (
 <>
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


      <Tabs.Panel value="banner2">
      <Banner2  bannerRadio={bannerData ? bannerData.radioValue : 'Default Value'}/>
      </Tabs.Panel>

      <Tabs.Panel value="banner3">
      <Banner3  />
      </Tabs.Panel>
     
    </Tabs>


   
    <Button
  variant="filled"
  color="#B2EFFD"
  mt={20}
  fw={600}
  fz={18}
  styles={{ root: { color: 'black' } }}
  onClick={() => handleBanner({ value: selectedBanner })}
>
  <IconPlus /> Add New Banner
</Button>

    


    <div style={{color:'white'}}>
      <h1>Dashboard</h1>
      {bannerData && (
        <div>
          <h2>Banner Data</h2>
          <img src={bannerData.image} alt="Banner" style={{ maxWidth: '200px' }} />
          <p>Radio Value: {bannerData.radioValue}</p>
          <p>Selected Option: {bannerData.listItem}</p>
        </div>
      )}
    </div>

 </>


    
  );
}