import { Button, Card, Overlay, Text  } from '@mantine/core';
import Link from 'next/link';

export default function Banner1() {
  return (
    <>
    
    
    <Card radius="md" >
      <Overlay opacity={0.55} zIndex={0} />

      <div>
        <Text size="lg" fw={700} >
          Plan & save
        </Text>

        <Text size="sm" >
          Save up to 25% at Fifth Season Hotels in Europe, the Middle East, Africa and Asia Pacific
        </Text>

        <Button  variant="white" color="dark" size="xs">
          Book now
        </Button>
      </div>
    </Card>

    <Link href='/dashboard/NewBanner'>
    <Button 
      variant="filled" 
      color="#B2EFFD" 
      styles={{ root: { color: 'black' } }}
    >
      + Add New Banner
    </Button>
    
    </Link>

    
    </>  );
}