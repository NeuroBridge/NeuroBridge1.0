import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from 'gatsby'
import { useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseMenuIcon } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Link as MuiLink, Drawer, IconButton, Button, MenuItem, Popover, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles'

const mainMenuLinks = [
  { text: 'Resources',      path: '/software' },
  { text: 'Publications',   path: '/publication' },
]
const aboutUs = [
    { text: 'What is NeuroBridge?',         path: '/about' },
    { text: 'Our Team',                     path: '/team' },
    { text: 'Participating Institutions',   path: '/institutions' },
]

/* eslint-disable no-unused-vars */
const resources = [
  { text: 'Resources',      path: '/software' },
  { text: 'Publications',   path: '/publications' },
]

const Header = ({ siteTitle }) => {
  /* eslint-disable no-unused-vars */
  const theme = useTheme()
  const styles = {
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
      height: '5rem'
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
      textTransform: 'uppercase',
      color: theme.palette.grey.A700,
      letterSpacing: '1px',
      font: '700 1.7rem/1 Libre Franklin '
    },
    navBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0 10px 30px',
      fontSize: '16px',
      fontWeight: '500',
      color: theme.palette.primary.main,
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
      textTransform: 'capitalize'
    },
    mobileMenuPaper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      fontSize: '200%',
      backgroundImage: 'linear-gradient(to bottom, #ffffff, #f4e8dd)',
      padding: '20px',
    },
    mobileMenuItem: {
      fontSize: '1.2rem',
      padding: '1rem',
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      textDecoration: 'none',
      transition: 'background-color 250ms',
      '&:hover': {
        backgroundColor: theme.palette.grey.A200,
      },
    },
    mobileMenuSubItem: {
      fontSize: '1rem',
      padding: '1rem',
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      textDecoration: 'none',
      transition: 'background-color 250ms',
      '&:hover': {
        backgroundColor: theme.palette.grey.A200,
      },
      marginLeft: '20px',
    },
    active: {
    },
    menuToggler: {
      // position: 'fixed',
      // top: '0',
      right: '1rem',
      zIndex: '999',
    }
  }

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

    <Box component="header" sx={styles.root}>
      <MuiLink 
        component={GatsbyLink}
        to='/'
        sx={styles.brand}
      >
        <Typography variant='h1' sx={styles.logo}>NeuroBridge</Typography>
      </MuiLink>
      {
        compact && (
          <Fragment>
            <Drawer open={ menuOpen } onClose={ () => setMenuOpen(false) } sx={styles.mobileMenuPaper}>
              <MuiLink
                component={GatsbyLink}
                to="/" 
                sx={ styles.brand } 
                style={{ margin: '1rem auto' }}
              >
                <Typography variant='h1' sx={styles.logo}>NeuroBridge</Typography>
              </MuiLink>
              <MuiLink
                component={GatsbyLink}
                to="/"
                key={ `mobile-main-menu-home` }
                sx={styles.mobileMenuItem}
                onClick={ () => setMenuOpen(false) }
              >About Us</MuiLink>
              {
                aboutUs.map(({ path, text }) => (
                    <MuiLink
                      component={GatsbyLink}
                      to={ path }
                      key={ `main-menu-${ text }` }
                      sx={styles.mobileMenuSubItem}
                      onClick={ () => setMenuOpen(false) }
                    >
                      { text }
                    </MuiLink>
                ))
              }
              {
                mainMenuLinks.map(({ path, text }) => (
                  <MuiLink
                    component={GatsbyLink}
                    to={ path }
                    key={ `mobile-main-menu-${ text }` }
                    sx={styles.mobileMenuItem}
                    onClick={ () => setMenuOpen(false) }
                  >{ text }</MuiLink>
                ))
              }
            </Drawer>
            <IconButton
              sx={ styles.menuToggler }
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
            <Box component='nav' sx={styles.navBar}>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={styles.dropDownButton}
              >
                About Us <KeyboardArrowDownIcon fontSize="small" />
              </Button>
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
                      <MenuItem onClick={handleClose} key={ `main-menu-${ text }` }>
                          <MuiLink
                          component={GatsbyLink}
                          to={ path }
                          key={ `main-menu-${ text }` }
                          sx={styles.menuItem}
                          >{ text }</MuiLink>
                      </MenuItem>
                  ))
                }
              </Popover>
              {
                mainMenuLinks.map(({ path, text }) => (
                  <MuiLink
                    component={GatsbyLink}
                    to={ path }
                    key={ `main-menu-${ text }` }
                    sx={styles.menuItem}
                  >{ text }</MuiLink>
                ))
              }
            </Box>
        )
      } 
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
