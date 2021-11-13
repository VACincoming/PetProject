import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Dropdown({ activeItem, items, handleClick }) {
    const handleOnClick = (value, popupState) => {
        handleClick(value);
        popupState.close();
    };
    let image = items.find((item) => item.name === activeItem).img;
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => {
                return (
                    <>
                        <Button
                            variant="text"
                            onClick={handleClick}
                            {...bindTrigger(popupState)}
                        >
                            <img
                                src={image}
                                alt={activeItem}
                                style={{ marginRight: "1rem" }}
                            />
                            {activeItem}
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            {items.map((item) => (
                                <MenuItem
                                    onClick={() =>
                                        handleOnClick(item.name, popupState)
                                    }
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        style={{ marginRight: "1rem" }}
                                    />
                                    {item.name.toUpperCase()}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                );
            }}
        </PopupState>
    );
}
