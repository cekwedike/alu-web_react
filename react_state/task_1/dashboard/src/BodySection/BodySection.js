import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class BodySection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className={css(styles.bodySection)}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.defaultProps = {
  title: "",
};

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const styles = StyleSheet.create({
  bodySection: {
    margin: "40px",
  },
});

export default BodySection;