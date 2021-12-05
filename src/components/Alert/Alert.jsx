import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import "./index.scss";
export default function BasicAlert({ message, type = "error", open = false }) {
    return (
        <Collapse in={open} className="alert">
            <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity={type}>{message}</Alert>
            </Stack>
        </Collapse>
    );
}
