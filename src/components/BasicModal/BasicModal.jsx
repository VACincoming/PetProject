import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomButton from "customComponents/CustomButton";
import "./index.scss";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

export default function BasicModal({
    open,
    handleClose,
    title,
    description,
    onConfirm = () => {},
}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <div className="modal-buttons">
                    <CustomButton
                        variant="contained"
                        color="error"
                        text="Cancel"
                        onClick={handleClose}
                    />
                    <CustomButton
                        variant="contained"
                        color="success"
                        text="Yes"
                        onClick={async () => {
                            await onConfirm();
                            handleClose();
                        }}
                    />
                </div>
            </Box>
        </Modal>
    );
}
