import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import UserForm from "./UserForm";

const containerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80vw", md: "40vw" },
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 24,
  p: 4,
};

const FormModal = ({ API_URL }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="large"
        endIcon={<PersonAddAltIcon />}
      >
        Add new customer
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ outline: "none" }} // remove outline on modal
      >
        <Fade in={open}>
          <Box sx={containerStyles}>
            <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
              Add New Customer
            </Typography>
            <UserForm closeModal={handleClose} API_URL={API_URL} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default FormModal;
