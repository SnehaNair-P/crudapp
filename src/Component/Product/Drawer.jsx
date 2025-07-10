import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import EditForm from '../Product/Edit';

export default function AnchorTemporaryDrawer({
  open,
  onClose,
  product,
  setProduct,
  showModal,
  setShowModal,
  editProduct,
  setDrawerOpen,
  setEditProduct
}) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 400, padding: 2 }}
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <h3>{editProduct ? 'Edit Product' : 'Add Product'}</h3>
        <EditForm
          product={editProduct}
          setProduct={setProduct}
          setShowModal={setShowModal}
          setDrawerOpen={setDrawerOpen}
          setEditProduct={setEditProduct}
        />
      </Box>
    </Drawer>
  );
}
