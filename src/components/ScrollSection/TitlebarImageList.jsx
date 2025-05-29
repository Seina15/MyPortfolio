import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 600, height: 450 , overflow:"hidden"}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div" style={{color:"white"}}sx={{fontSize:"1.5rem", backgroundColor:"#213547", fontWeight:"bold"}}>Competition</ListSubheader>
        <p>ハッカソンの作品（仮置き）</p>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.place}
            actionIcon={
              item.title !== '激動の令和' ? (
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              ) : null
            }
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: './public/novice.png',
    title: '星間旅行',
    place: 'StarT-Tech ハッカソン',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://via.placeholder.com/248x200?text=No+Image',
    title: '激動の令和',
    place: '技育Camp ハッカソン',
  },
  {
    img: './public/babycam.png',
    title: 'べビCam',
    place: 'Hack U ハッカソン',
  },

];