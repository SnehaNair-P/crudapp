import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddForm from './Form';

export default function AddProductDrawer({
    open,
    onClose,
    setProduct,
    setShowModal,
}) {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box
                sx={{ width: 400, padding: 2 }}
                role="presentation"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <h3>Add Product</h3>
                <AddForm setProduct={setProduct} setShowModal={setShowModal} />
            </Box>
        </Drawer>
    );
}
