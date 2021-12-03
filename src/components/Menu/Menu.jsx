import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import "./index.scss";
import { useHistory } from "react-router-dom";

export default function Menu({ menuList = [] }) {
    const history = useHistory();
    return (
        <>
            {menuList.length ? (
                <Paper sx={{ width: 320, maxWidth: "100%" }}>
                    <MenuList>
                        {menuList.map((list, index) => (
                            <>
                                <MenuItem
                                    onClick={() => history.push(list.link)}
                                    key={index}
                                >
                                    <ListItemIcon>{list.icon}</ListItemIcon>
                                    <ListItemText>{list.text}</ListItemText>
                                </MenuItem>
                                {menuList.length - 1 !== index && <Divider />}
                            </>
                        ))}
                    </MenuList>
                </Paper>
            ) : null}
        </>
    );
}
