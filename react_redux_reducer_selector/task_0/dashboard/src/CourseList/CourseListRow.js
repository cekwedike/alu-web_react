import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let element;

  const tableItemStyle = css(
    isHeader ? styles.CourseListTh : styles.CourseListTd
  );

  if (isHeader === true) {
    if (textSecondCell === null) {
      element = (
        <th colSpan="2" className={css(styles.CourseListThSpan2)}>
          {textFirstCell}
        </th>
      );
    } else {
      element = (
        <>
          <th className={tableItemStyle}>{textFirstCell}</th>
          <th className={tableItemStyle}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    element = (
      <>
        <td className={tableItemStyle}>
          <div className={css(styles.checkboxContainer)}>
            <input
              type="checkbox"
              id={`checkbox-${textFirstCell}`}
              className={css(styles.checkbox)}
            />
            <label htmlFor={`checkbox-${textFirstCell}`} className={css(styles.checkboxLabel)}>
              {textFirstCell}
            </label>
          </div>
        </td>
        <td className={tableItemStyle}>{textSecondCell}</td>
      </>
    );
  }

  return <tr className={css(isHeader ? styles.headerRow : styles.row)}>{element}</tr>;
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const cssVars = {
  borderTableColor: "rgb(170, 170, 170);",
};

const styles = StyleSheet.create({
  CourseListTh: {
    borderTop: `1px solid ${cssVars.borderTableColor}`,
    borderBottom: `1px solid ${cssVars.borderTableColor}`,
    textAlign: "left",
    fontSize: "18px",
  },

  CourseListThSpan2: {
    textAlign: "center",
  },

  CourseListTd: {
    textAlign: "left",
  },

  headerRow: {
    backgroundColor: "#deb5b545",
  },

  row: {
    backgroundColor: "#f5f5f5ab",
  },

  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  checkbox: {
    margin: 0,
  },

  checkboxLabel: {
    cursor: "pointer",
  },
});

export default CourseListRow;
