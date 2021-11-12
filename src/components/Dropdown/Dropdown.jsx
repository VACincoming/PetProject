import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Dropdown() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => {
                console.log(popupState);
                return (
                    <>
                        <Button
                            variant="contained"
                            {...bindTrigger(popupState)}
                        >
                            Dashboard
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                );
            }}
        </PopupState>
    );
}
