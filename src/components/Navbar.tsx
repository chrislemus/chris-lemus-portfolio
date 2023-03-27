import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
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
