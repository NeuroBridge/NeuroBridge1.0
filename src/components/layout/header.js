import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import { makeStyles } from '@mui/styles'

import { Drawer, IconButton } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@mui/icons-material'
//imports for dropdown menu
import { Button, ButtonUnstyled, Menu, MenuItem, Popover, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classnames from 'classnames'

const mainMenuLinks = [
  { text: 'Resources',      path: '/software' },
  { text: 'Publications',   path: '/publication' },

]
const aboutUs = [
    { text: 'What is NeuroBridge?',         path: '/about' },
    { text: 'Our Team',                     path: '/team' },
    { text: 'Participating Institutions',   path: '/institutions' },
  
]
const resources = [
  { text: 'Resources',      path: '/software' },
  { text: 'Publications',   path: '/publications' },
]

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: '0',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '10px 30px',
    zIndex: '10',
  },
  brand: {
    margin:'0 1rem 0 2rem',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: ['none', '!important'],
  },

  logo: {
    margin: '0',
    padding: '0',
    lineHeight: '1',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#4a5562',
    letterSpacing: '1px',
    fontSize: ['1.7rem', '!important'],
    
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0 10px 30px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#556270',
    whiteSpace: 'nowrap',
    transition: '0.3s',
  },
  menuItem: {
    color: 'grey',
    padding: '10px',
    letterSpacing: '1px',
    textDecoration: 'none',
    fontWeight: '500',
  },
  dropDownButton: {
    textDecoration: 'none',
    color: 'grey',
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1px',
    padding: '10px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  mobileMenuDrawer: {
    // border: '5px dotted crimson',
  },
  mobileMenuPaper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    fontSize: '200%',
    backgroundImage: 'linear-gradient(to bottom, #ffffff, #f4e8dd)',
    // border: '5px dotted blue',
    padding: '20px',
  },
  mobileMenuItem: {
    fontSize: '1.2rem',
    padding: '1rem',
    color: '#556270',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    transition: 'background-color 250ms',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    // border: '5px dotted purple',

  },
  mobileMenuSubItem: {
    fontSize: '1rem',
    padding: '1rem',
    color: '#556270',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    transition: 'background-color 250ms',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    marginLeft: '20px',
    // border: '5px dotted green',

  },
  active: {

  },
  menuToggler: {
    position: 'fixed',
    top: '0',
    right: '1rem',
    zIndex: '999',
  }
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const compact = useMediaQuery('(max-width: 1142px)');
  // const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  // MUI code for dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //pre-existing function
  const handleClickToggler = () => {
    setMenuOpen(!menuOpen)
  }

  return (

    <header className={classes.root}>
      <Link to='/' className={classes.brand}>
        <Typography variant='h1' className={classes.logo}>NeuroBridge</Typography>
      </Link>
      {
        compact && (
          <Fragment>
            <Drawer open={ menuOpen } onClose={ () => setMenuOpen(false) } classes={{ root: classes.mobileMenuDrawer, paper: classes.mobileMenuPaper }}>
              <Link to="/" className={ classes.brand } style={{ margin: '1rem auto' }}>
                <Typography variant='h1' className={classes.logo}>NeuroBridge</Typography>
              </Link>
              <Link
                to="/"
                key={ `mobile-main-menu-home` }
                className={ classnames(classes.mobileMenuItem) }
                onClick={ () => setMenuOpen(false) }
              >About Us</Link>
              {
                aboutUs.map(({ path, text }) => (
                    <Link
                    to={ path }
                    key={ `main-menu-${ text }` }
                    className={ classnames(classes.mobileMenuSubItem) }
                    onClick={ () => setMenuOpen(false) }
                    >{ text }</Link>
                ))
              }
              {
                mainMenuLinks.map(({ path, text }) => (
                  <Link
                    to={ path }
                    key={ `mobile-main-menu-${ text }` }
                    className={ classnames(classes.mobileMenuItem) }
                    onClick={ () => setMenuOpen(false) }
                  >{ text }</Link>
                ))
              }
            </Drawer>
            <IconButton
              className={ classes.menuToggler }
              size="large"
              onClick={ handleClickToggler }
            >
              {
                menuOpen
                  ? <CloseMenuIcon fontSize="large" />
                  : <MenuIcon fontSize="large" />
              }
            </IconButton>
          </Fragment>
        )
      }
      {
        !compact && (
            <nav className={classes.navBar}>
              <ButtonUnstyled
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={classes.dropDownButton}
              >
                About Us <KeyboardArrowDownIcon fontSize="small" />
              </ButtonUnstyled>
              <Popover
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}                  
              >
                {
                  aboutUs.map(({ path, text }) => (
                      <MenuItem onclick={handleClose} key={ `main-menu-${ text }` }>
                          <Link
                          to={ path }
                          key={ `main-menu-${ text }` }
                          className={classes.menuItem}
                          >{ text }</Link>
                      </MenuItem>
                  ))
                }
              </Popover>
              {
                mainMenuLinks.map(({ path, text }) => (
                  <Link
                    to={ path }
                    key={ `main-menu-${ text }` }
                    className={classes.menuItem}
                  >{ text }</Link>
                ))
              }
            </nav>
        )
      } 
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
