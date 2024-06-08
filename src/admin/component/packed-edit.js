import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EditServiceModal = ({ open, handleClose, service, handleSave }) => {
    const [editedService, setEditedService] = useState({ ...service });
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(service.service_img || ''); // Assuming service has an image field

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedService((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="edit-service-modal-title"
            aria-describedby="edit-service-modal-description"
        >
            <Box sx={style}>
                <Typography id="edit-service-modal-title" variant="h6" component="h2">
                    Edit Service
                </Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="ID"
                    name="id"
                    value={editedService.id}
                    disabled
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Service Type"
                    name="service_type"
                    value={editedService.service_type}
                    disabled
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Price"
                    name="price"
                    value={editedService.price}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Created At"
                    name="createdAt"
                    value={editedService.createdAt}
                    onChange={handleChange}
                />
                {imagePreview && (
                    <Box mt={2} mb={2}>
                        <img src={imagePreview} alt="Current" style={{ width: '100%' }} />
                    </Box>
                )}
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Upload Image
                    <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Button>
                <Button onClick={() => handleSave(editedService)} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Save
                </Button>
            </Box>
        </Modal>
    );
};

export default EditServiceModal;
