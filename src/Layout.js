import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
  Grid,
  // FormGroup,
  Typography
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose';
import { fade } from '@material-ui/core/styles/colorManipulator'; 
import Appbar from './Components/Appbar';
const drawerWidth = 240;
const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  flex: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'white',
    color: '#575757',
    border: 'none',
    borderRaduis: 'none',
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: 'none',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  size: {
    minWidth: '412px',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 4,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    border: '1px solid #ebebeb',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      }
    }
  }
})
class Layout extends Component {
  state = {
    mobileOpen: false,
    anchorEl: null,
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { anchorEl } = this.state;
    const { classes, children } = this.props;
    const { mobileOpen } = this.state;
    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
          <MenuItem component={Link} to="/home">
            <Typography>
              ZEN
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/">
            Trade Settings
          </MenuItem>
          <MenuItem component={Link} to="/">
            Transfer In / Out
          </MenuItem>
        </MenuList>
      </div>
    )
    return <Fragment>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <div>
            <Appbar
              classes={ classes }
              anchorEl={ anchorEl }
              handleLogout={ this.handleLogout }
              handleDrawerToggle={this.handleDrawerToggle }
              handleClose={ this.handleClose }
              handleMenu={ this.handleMenu } />
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                open={ mobileOpen }
                onClose={ this.handleDrawerToggle }
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                { drawer }
              </Drawer>
            </Hidden>
            {/* <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>  */}
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default compose(
  withRouter,
  withStyles(styles)
)(Layout)