import React from "react";
import styles from './styles.module.css'

const BeerDetails = (props) => {
  return (
    <div
      className={styles.detail_wrapper}
    >
      <img className={styles.detail_img} src={props.beer.image_url} />
      <div className={styles.detail_text_wrapper}>
        <h2 className={styles.detail_title}>{props.beer.name}</h2>
        <h3 className={styles.detail_abv}>ABV: {props.beer.abv}</h3>
        <p className={styles.detail_description}>{props.beer.description}</p>
        <h3>Why Not try with:</h3>
        {props.beer.food_pairing.map(foodPairing =>
          <div className={styles.detail_food_pairing}>{foodPairing}</div>
        )}

      </div>
    </div>
  );
}

export default BeerDetails;