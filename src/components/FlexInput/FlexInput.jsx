import React, { useState } from "react";
import CustomInput from "customComponents/CustomInput";
import CustomText from "customComponents/CustomText";
import Info from "components/Info";
import "./index.scss";
import edit from "static/img/edit.png";
import CustomField from "customComponents/CustomField";

export default function FlexInput({
    input = false,
    className = "",
    title = "",
    inputName = "",
    size = "small",
    label = "",
}) {
    const [isInput, setIsInput] = useState(input);
    return (
        <div data-component="flex-input">
            <CustomText title={label} tag="p" className="label-text" />
            {isInput ? (
                <div className="cancel-input">
                    <img
                        src={edit}
                        alt=""
                        className="edit-img"
                        onClick={() => setIsInput(false)}
                    />
                    <CustomField
                        id={inputName}
                        name={inputName}
                        size={size}
                        value={title}
                        placeholder={title}
                    />
                </div>
            ) : (
                <Info className={`edit-text ${className}`}>
                    <img
                        src={edit}
                        alt=""
                        className="edit-img"
                        onClick={() => setIsInput(true)}
                    />
                    <CustomText title={title} />
                </Info>
            )}
        </div>
    );
}
