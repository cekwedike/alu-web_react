import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import AppContext from "../App/AppContext";
import { StyleSheet, css } from "aphrodite";

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className={css(styles.footer)}>
      <p className={css(styles.copyright)}>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <a
          href="mailto:contact@school.com"
          className={css(styles.link)}
          aria-label="Contact us"
        >
          Contact us
        </a>
      )}
    </footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
  },
  copyright: {
    margin: 0,
  },
  link: {
    color: "#e01d3f",
    textDecoration: "none",
    marginLeft: "10px",
    ":hover": {
      textDecoration: "underline",
    },
  },
});

export default Footer;
