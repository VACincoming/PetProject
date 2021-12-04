import React from "react";
import { DropzoneDialog as DropzoneDialogExample } from "material-ui-dropzone";

export default function DropzoneDialog({ open, handleSave, handleClose }) {
    return (
        <div>
            <DropzoneDialogExample
                open={open}
                onSave={handleSave}
                filesLimit={1}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />
        </div>
    );
}
