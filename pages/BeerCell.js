import React from "react";
import styles from './styles.module.css'

const BeerCell = (props) => {
  return (
    <div
      className={styles.cell_outer_wrapper}
    >
      <div
        className={styles.cell_wrapper}
        onClick={props.setSelectedBeer}
      >
        <img className={styles.cell_img} src={props.beer.image_url} />
        <div className={styles.cell_text_wrapper}>
          <h3 className={styles.cell_title}>{props.beer.name}</h3>
          <div className={styles.cell_tagline}>{props.beer.tagline}</div>
        </div>
      </div>
    </div>
  );
}

export default BeerCell;