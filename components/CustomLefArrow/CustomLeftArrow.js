// CustomLeftArrow.jsx
import React from "react";
import styles from "../../pages/techno/Techno.module.css";
const CustomLeftArrow = ({ onClick }) => {
  return (
    <>
      <div className={styles["round"] + " " + styles["roundLeft"]}>
        <div className={styles.customLeftArrow} onClick={onClick} />
      </div>
      
    </>
  );
};

export default CustomLeftArrow;
