import {
    IconSection,
    IconLivePhoto,
    IconClipboardText,
    IconFileText,
    IconUserCog,
    IconSettings,
  } from "@tabler/icons-react";
  
   export const navbarData = [
    {
      id: 0,
      label: "Banners",
      bg:'transparent',
      icon: IconSection ,
      iconColor:'black',
      iconBg:'#E7F5FF',
      category: [
        { 
          id:1 , label: 'Home', path:'/dashboard/BannerHome'  },
        {   id:2 , label: 'Livestreams',  path:'/dashboard/BannerLivestreams' },
        {   id:3 , label: 'Gem reporters', path: '/dashboard/BannerGemreporters' },
        {  id:4 , label: 'Academy', path:'/dashboard/BannerAcademy' },
      ],
    },
    {
      id: 1,
      label: "Livestreams",
      icon: IconLivePhoto ,
      iconColor:'#40C057',
      iconBg:'#EBFBEE',
      path: "/dashboard/livestreams",
    },
    {
      id: 2,
      label: "Gem reporters",
      icon: IconClipboardText ,
      iconColor:'#7950F2',
      iconBg:'#F3F0FF',
      path: "/dashboard/gemreporters",
    },
    {
      id: 3,
      label: "Academy",
      icon: IconFileText ,
      iconColor:'#1A1F26',
      iconBg:'#F3F0FF',
      path: "/dashboard/academy",
    },
    {
      id: 4,
      label: "Users",
      icon: IconUserCog ,
      iconColor:'#BE4BDB',
      iconBg:'#F8F0FC',
      path: "/dashboard/users",
    },
    {
      id: 5,
      label: "Settings",
      icon: IconSettings,
      iconColor:'#15AABF',
      iconBg:'#E3FAFC',
      path: "/dashboard/settings",
    },
  ];
  

  