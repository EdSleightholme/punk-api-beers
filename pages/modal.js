import React from "react";
import styles from './styles.module.css'
export function Modal(props) {
  if (!props.display) {
    return <React.Fragment />;
  } else {
    return (
      <div className={styles.modal_outer}>
        <div className={styles.modal_content}>
          <div
            onClick={() => props.setDisplay(false)}
            className={styles.modal_close_button}
          >
            X
          </div>
          <br />
          {props.children}
        </div>
      </div>
    );
  }
}
