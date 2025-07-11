import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./DetailProject.css"

// MUI引用

export function DetailProject({ open, onClose, item }) {
  if (!item) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className="modal-style">
        <Typography id="modal-title" variant="h6" component="h2">
          {item.title}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          内容: {item.place}
          <br />
          カテゴリー: {item.category}
          <br />
          詳細: {item.explain}
        </Typography>

        <img
          src={item.img}
          alt={item.title}
          style={{ width: '50%', marginTop: '10px', borderRadius: '8px' }}
        />
      </Box>
    </Modal>
  );
}
