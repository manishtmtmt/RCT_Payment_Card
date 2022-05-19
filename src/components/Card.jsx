import React from "react";
import styles from "./card.module.css";

const Card = ({ date, subHeading, heading, devices, logo, color }) => {
  return (
    <>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <div>
          <p>{date}</p>
          <p className={styles.subheading}>{subHeading}</p>
          <h1>{heading}</h1>
          <p>{devices}</p>
        </div>
        <div className={styles.box2}>
          <div className={styles.imgbox}>
            <img src={logo} className={styles.logo} />
          </div>
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png"
              className={styles.arrow}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
