import { Button, Card, Overlay, Text  } from '@mantine/core';
import Link from 'next/link';
import {IconPlus} from '@tabler/icons-react'

export default function Banner2() {
  return (
    <>
    
    
    
 
    <Link href='/dashboard/NewBanner'>
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
    
    </Link>

    
    </>  );
}