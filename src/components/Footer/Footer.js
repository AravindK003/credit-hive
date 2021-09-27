/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <p className={classes.center}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://www.codiis.com"
              target="_blank"
              className={classes.a}
            >
              Connected Digital Systems Pvt Ltd
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
}
