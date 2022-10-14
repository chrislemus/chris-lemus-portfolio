import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import styles from './NavBar.module.scss';

const navLinkData = [
  { label: 'Portfolio', link: '/#portfolio' },
  { label: 'Skills', link: '/#skills' },
  { label: 'Contact', link: '/#contact' },
];

export default function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box className={styles.navBar} id="navbar">
      <Box flexGrow="1">
        <img src="./images/icons/logo.png" alt="site-logo" />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          edge="start"
          onClick={(event) => setAnchorEl(event.currentTarget)}
          className={styles.menuButton}
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
              className={styles.phoneMenu}
              key={`sm-screen-navlink-${idx}`}
            >
              <MenuItem onClick={handleClose}>{label}</MenuItem>
            </a>
          ))}
        </Menu>
        <div className={styles.navLinksWrapper}>
          {navLinkData.map(({ label, link }, idx) => (
            <Link
              href={link}
              underline="none"
              key={`lg-screen-navlink-${idx}`}
              className={styles.navLink}
            >
              {label}
            </Link>
          ))}
        </div>
      </Box>
    </Box>
  );
}
