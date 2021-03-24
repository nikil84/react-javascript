import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React from 'react'
import Icon from '../Icon';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    logo: {
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '1.5rem',
        fontWeight: 800,
        lineHeight: '64px',
        width: '100%',
        textTransform: 'uppercase'
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    list: {
        height: `calc(100vh - 64px - 66px)` //100vh - toolbar - padding top - padding bottom - settings height
    },
    fixedBottom: {
        position: "absolute",
        bottom: 0
    },
    settings:{
        position: 'relative',
        minHeight: '64px'
    }
}));

const menus = [{
    id: 'option1',
    icon: 'desktop',
    label: 'Menu Option1',
    style:''
},
{
    id: 'option2',
    icon: 'inbox',
    label: 'Menu Option2',
    style:''
},{
    id: 'option3',
    icon: 'desktop',
    label: 'Menu Option3',
    selected: true,
    style:''
},
{
    id: 'option4',
    icon: 'inbox',
    label: 'Menu Option4',
    style:'fixedBottom'
}]


const NavItems = ( {classes}) => (<div>
    <div className={classes.toolbar} > <Typography className={classes.logo} color="primary"> Logo Here </Typography> </div>
    <Divider />
    <List className={classes.list}>
        {menus.map( menu => (<ListItem button key={menu.id} className={classes[menu.style]} selected={menu.selected}>
                <ListItemIcon><Icon name={menu.icon} /></ListItemIcon>
                <ListItemText primary={menu.label} />
            </ListItem>
            )
        )}
    </List>
    <div className={classes.settings} > 
        <ListItem button key={"settings"} className={classes.fixedBottom}>
            <ListItemIcon><Icon name="inbox"/> </ListItemIcon>
            <ListItemText primary={"Settings"} />
        </ListItem>
    </div>
</div>)

export default function Navigation({ mobileOpen, handleDrawerToggle }) {
    const theme = useTheme();
    const classes = useStyles();

    return (<nav className={classes.drawer}>
        <Hidden smUp implementation="css">
            <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
            <NavItems classes={classes}></NavItems>
            </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <NavItems classes={classes}></NavItems>
            </Drawer>
        </Hidden>
    </nav>);
}