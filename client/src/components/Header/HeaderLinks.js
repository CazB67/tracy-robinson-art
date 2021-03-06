/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="/"
          className={classes.navLink}
        >
           HOME
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          color="transparent"
          className={classes.navLink}
        >
           ABOUT
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#shop"
          color="transparent"
          className={classes.navLink}
        >
           SHOP
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#gallery"
          color="transparent"
          className={classes.navLink}
        >
          GALLERY
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#contact"
          color="transparent"
          className={classes.navLink}
        >
           CONTACT
        </Button>
      </ListItem>
    </List>
  );
}
