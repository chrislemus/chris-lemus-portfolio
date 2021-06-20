import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    color: '#fff',
  },
  navBar: {
    position: 'absolute',
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    width: '100%',
  },
  phoneMenu: {
    color: theme.palette.text.primary,
  },
  navLinksWrapper: {
    display: 'flex',

    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
const NavLink = withStyles({
  root: {
    textDecoration: 'none',
    color: '#fff',
    padding: '.5rem .8rem',
  },
})(Link);
const navLinkData = [
  { label: 'Portfolio', link: '/#portfolio' },
  { label: 'Skills', link: '/#skills' },
  { label: 'Contact', link: '/#contact' },
];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);

  const classes = useStyles();
  return (
    <Box className={classes.navBar} id="navbar">
      <Box flexGrow="1">
        <img src="./images/icons/logo.png" alt="site-logo" />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          edge="start"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          className={classes.menuButton}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {navLinkData.map(({ label, link }, idx) => (
            <a
              href={link}
              className={classes.phoneMenu}
              key={`sm-screen-navlink-${idx}`}
            >
              <MenuItem onClick={handleClose}>{label}</MenuItem>
            </a>
          ))}
        </Menu>
        <div className={classes.navLinksWrapper}>
          {navLinkData.map(({ label, link }, idx) => (
            <NavLink
              href={link}
              underline="none"
              key={`lg-screen-navlink-${idx}`}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </Box>
    </Box>
  );
}

// <Navbar expand="lg">
//   <Navbar.Brand href="/">
//     <img src="./images/icons/logo.png" alt="site-logo" />
//   </Navbar.Brand>
//   <Navbar.Toggle id="nav-toggler-icon" />
//   <Navbar.Collapse>
//     <Nav className="ml-auto nav-menu-items">
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
//       <Nav.Link href="/#skills">Skills</Nav.Link>
//       <Nav.Link href="/#contact">Contact</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>;
