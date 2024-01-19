import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CenterFocusStrong } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';

const data = [
  {
    src: 'https://cdn.cloudflare.steamstatic.com/steam/apps/524220/capsule_616x353.jpg?t=1696405478',
    title: 'NieR Automata',
    description: '4.21M views',
  },
  {
    src: 'https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/177700635/poster-dark-souls-3-iii-b-6d14da9d.jpg',
    title: 'Dark Souls 3',
    description: '4.74M views',
  },
  {
    src: 'https://cdn.akamai.steamstatic.com/steam/apps/893180/capsule_616x353.jpg?t=1603127197',
    title: 'Catherine Classic',
    description: '3.98M views',
  },
  {
    src: 'https://cdn.akamai.steamstatic.com/steam/apps/567640/capsule_616x353.jpg?t=1654081483',
    title: 'Danganronpa V3: Killing Harmony',
    description: '3.98M views',
  },
  {
    src: 'https://egamersworld.com/uploads/blog/1675064140426-isbig-1.jpg',
    title: 'Dota 2',
    description: '3.98M views',
  },
];

export default function CarouselOwnedGames() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
          <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            <Typography level="body-sm">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
}