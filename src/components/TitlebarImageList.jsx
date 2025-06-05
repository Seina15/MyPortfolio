import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { DetailProject } from './DetailProject/DetailProject';

export default function TitlebarImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <>
      <ImageList sx={{ width: 700, height: 700, overflow: 'hidden' }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader
            component="div"
            style={{ color: 'black' }}
            sx={{ fontSize: '1.5rem', backgroundColor: 'white', fontWeight: 'bold', marginTop: 10 }}
          >
            Competition (Projects)
          </ListSubheader>
        </ImageListItem>

        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                border: '4px solid white',
                borderRadius: '4px',
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.place}
              actionIcon={
                item.title !== '激動の令和' ? (
                  <IconButton
                    sx={{ color: 'rgba(227, 236, 255, 0.93)' }}
                    aria-label={`info about ${item.title}`}
                    onClick={() => {
                      setSelectedItem(item);
                      setOpen(true);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                ) : null
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      {selectedItem && (
        <DetailProject open={open} onClose={() => setOpen(false)} item={selectedItem} />
      )}
    </>
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
    img: './public/noimage.png',
    title: '激動の令和',
    place: '技育Camp ハッカソン',
  },
  {
    img: './public/babycam.png',
    title: 'べビCam',
    place: 'Hack U ハッカソン',
  },
  {
    img: './public/HSR.jpg',
    title: 'Storing Grossly & Restaurant',
    place: 'RoboCup@Home',
  },
  

];