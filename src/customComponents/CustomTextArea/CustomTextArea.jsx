import React, { memo } from "react";
import { TextareaAutosize } from "@mui/material";
import { useField } from "formik";

const CustomTextArea = memo(
    ({
        maxRows = "",
        ariaLabel,
        placeholder = "",
        required = false,
        id = "",
        name = "",
        className = "",
        ...attributes
    }) => {
        const [field] = useField(name);
        return (
            <TextareaAutosize
                maxRows={maxRows}
                id={id}
                name={name}
                required={required}
                aria-label={ariaLabel}
                placeholder={placeholder}
                className={className}
                {...attributes}
                {...field}
            />
        );
    }
);

export default CustomTextArea;
