import React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import './index.scss';
import PermIdentity from '@mui/icons-material/PermIdentity';
import Receipt from '@mui/icons-material/Receipt';
import Logout from '@mui/icons-material/Logout';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Menu({ currentLink }) {
    const history = useHistory();
    const { t } = useTranslation();
    const isActive = (link) => (currentLink?.includes(link) ? 'active-item' : '');
    const menuList = [
        {
            icon: <PermIdentity />,
            text: `${t('create:myProfile')}`,
            link: '/myprofile',
        },
        {
            icon: <Receipt />,
            text: `${t('create:myPosts')}`,
            link: '/myposts',
        },
        // {
        //     icon: <Favorite />,
        //     text: "My Favorites",
        //     link: "/myfavorites",
        // },
        {
            icon: <Logout />,
            text: `${t('create:logout')}`,
            link: '/logout',
        },
    ];
    return (
        <>
            {menuList.length ? (
                <Paper sx={{ width: 320, maxWidth: '100%' }}>
                    <MenuList>
                        {menuList.map((list, index) => (
                            <div key={index}>
                                <MenuItem
                                    onClick={() => {
                                        history.push(list.link);
                                    }}
                                    className={isActive(list.link)}
                                >
                                    <ListItemIcon>{list.icon}</ListItemIcon>
                                    <ListItemText>{list.text}</ListItemText>
                                </MenuItem>
                                {menuList.length - 1 !== index && <Divider />}
                            </div>
                        ))}
                    </MenuList>
                </Paper>
            ) : null}
        </>
    );
}
