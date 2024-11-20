// 'use client';

// import { AppShell, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/header/page';
// import React from 'react';

// export default function DashboardLayout({ children }) {
//   const [opened, { toggle }] = useDisclosure(); // Toggle state for the sidebar

//   return (
//     <AppShell
//       style={{ backgroundColor: 'pink' }}
//       header={{ height: 60 }}
//       navbar={{
//         width: 300,
//         breakpoint: 'sm',
//         collapsed: { mobile: !opened }, // Sidebar toggling logic
//       }}
//       padding="md"
//     >
//       <Header />
//       <Sidebar />

//       <AppShell.Main bg={'black'}>{children}</AppShell.Main>
//     </AppShell>
//   );
// }




'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import React from 'react';

export default function DashboardLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      style={{ backgroundColor: 'pink' }}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Header />
      <Sidebar />
      <AppShell.Main bg={'black'}>{children}</AppShell.Main>
    </AppShell>
  );
}
