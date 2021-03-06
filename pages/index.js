import React, { useState, useEffect } from "react";
import { fetchAllBeers } from "./api_caller";
import BeerTable from './BeerTable'
import BeerDetails from './BeerDetails'
import styles from './styles.module.css'
import { Modal } from "./modal";

export default function Home() {

  const [beers, setBeers] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState();
  const [loading, setLoading] = useState(false);

  const loadBeers = async () => {
    setLoading(true);
    const allBeers = await fetchAllBeers();
    setBeers(allBeers);
    setLoading(false);
  };

  useEffect(() => {
    loadBeers()
    return
  }, [])

  return <div>
    <header>
      <h1 className={styles.header} onClick={() => { setSelectedBeer() }} >PUNK API</h1>
    </header>
    <BeerTable loading={loading} beers={beers} setSelectedBeer={setSelectedBeer} />
    <Modal display={!!selectedBeer} setDisplay={setSelectedBeer}>
      <BeerDetails beer={selectedBeer} />
    </Modal>
    <footer className={styles.footer}>Made By Ed.S | Powered by PunkApi.com/v2 </footer>
  </div>

}
