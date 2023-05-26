// CustomRightArrow.jsx
import React from "react";
import styles from "../../pages/techno/Techno.module.css";
const CustomRightArrow = ({ onClick }) => {
  return (
    <>
      <div className={styles["round"] + " " + styles["roundRight"]}>
        <div className={styles.customRightArrow} onClick={onClick} />
      </div>
    </>
  );
};
export default CustomRightArrow;
