import * as React from "react";
import "./index.scss";
export default function Info({ children, className }) {
    return <div className={`info-container ${className}`}>{children}</div>;
}
