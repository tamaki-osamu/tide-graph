import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Link from "@material-ui/core/Link";
import logo_light from "../img/logo1.svg";
import logo_dark from "../img/logo1_dark.svg";
import HamburgerMenu from "./HamburgerMenu.js";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: theme.navbar.height,
  },
  logo: {
    height: theme.navbar.logoHeight,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function (props) {
  const classes = useStyles();
  const logo = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? logo_dark
    : logo_light;

  return (
    <nav>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <HamburgerMenu />
            <Link href={"/"} className={classes.logo}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar className={classes.toolbar} />
    </nav>
  );
}
