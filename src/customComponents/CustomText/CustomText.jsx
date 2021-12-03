import React, { memo } from "react";
import "./index.scss";
const CustomText = memo(
    ({
        tag: Tag = "span",
        children = [],
        title = "",
        className = "",
        ...props
    }) => (
        <Tag className={className} {...props}>
            {title || children}
        </Tag>
    )
);

export default CustomText;
