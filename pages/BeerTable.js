import React from "react";
import { BeerCell } from "./BeerCell";
import styles from './styles.module.css'

const BeerTable = (props) => {

  return (
    <div>
      {props.loading ? (
        <p>loading....</p>
      ) : props.beers.length === 0 ? (
        <p>No Data To Display</p>
      ) : (
            <div className={styles.grid_wrapper}>
              {props.beers.map((beer, index) => {
                return <BeerCell
                  beer={beer}
                  key={index + "beer"}
                  setSelectedBeer={() => {
                    props.setSelectedBeer(beer)
                  }} />
              })}
            </div>
          )}
    </div>
  );
}

export default BeerTable;
