// Sidebar.js
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const menuItems = [
    {id:'dashboard', text: 'Dashboard', icon: 'dashboard', route: '/dashboard', subItems: []},
    {id:'material', text: 'material', icon: 'inventory_2', route: '/material', subItems: [
        {id:'add-material', text: 'Add', icon: 'add_to_photos', route: '/add-material', subItems: []},
        {id:'edit-material', text: 'Edit', icon: 'auto_awesome_mosaic', route: '/edit-material', subItems: []},
    ]},

];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 240,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
    },
    toolbar: theme.mixins.toolbar,
  })
);

function Sidebar({ setSelectedItem}) {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text} onClick={() => setSelectedItem(item.id)}>
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        </List>
      </Drawer>
    </nav>
  );
}

export default Sidebar;
