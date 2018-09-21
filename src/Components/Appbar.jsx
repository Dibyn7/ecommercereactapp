import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

const Appbar = ({ classes, anchorEl, handleDrawerToggle, handleClose, handleMenu }) => {

    const open = Boolean(anchorEl);
    return (
        <Fragment>
            <AppBar position="absolute" classes={{ root: classes.appBar }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ fontWeight: 500, letterSpacing: '3px', paddingLeft: '7px' }} variant="headline">
                        <Button component={ Link } to="/home">Zen</Button>
                    </Typography>



                    
                        <div className={ classes.flex } />
                        <div className={ classes.search }>
                            <div className={ classes.searchIcon }>
                                <SearchIcon />
                            </div>
                            <Input
                                placeholder="Search…"
                                disableUnderline
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                            </div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <div style={{ outline: 'none' }}>
                                    <MenuItem component={Link} onClick={handleClose} to="/login" >
                                        Login
                                     </MenuItem>
                                    <MenuItem component={Link} onClick={handleClose} to="/register">
                                        Register
                                     </MenuItem>
                                </div>
                                )}
    
                        </Menu>
                        
                </Toolbar>
            </AppBar>
        </Fragment>
            )
        }
        export default Appbar;
