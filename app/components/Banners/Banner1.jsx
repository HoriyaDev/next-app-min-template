import { Button  } from '@mantine/core';
import Link from 'next/link';
import {IconPlus} from '@tabler/icons-react'

export default function Banner1({bannerRadio}) {
 
  return (
    <>
    
   <h1 style={{color:'white'}}>{bannerRadio}</h1>
     
    {/* <Link href='/dashboard/NewBanner'>
    <Button 
      variant="filled" 
      color="#B2EFFD"
      mt={20}
       fw={600}
       fz={18}
      styles={{ root: { color: 'black' } }}
      
    >
     <IconPlus />Add New Banner
    </Button>
    
    </Link> */}

    
    </>  );
}