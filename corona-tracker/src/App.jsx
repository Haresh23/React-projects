import React, { useEffect, useState } from "react";
import { Charts, Cards, CountryPicker } from "./components";
import styles from './App.module.css';
import { fetchDailyData } from './api'

const App = () => {
    const [dat, setDat] = useState({});
    const [Chartdat, setChartDat] = useState([]);
    useEffect(() => {
        const fetchedData = async () => {
            const da = await fetchDailyData();
            setDat(da[0]);
            setChartDat(da);
            console.log(da[0])
        }
        fetchedData();

    }, []);
    const modified = {
        date: dat.date,
        death: dat.death,
        positive: dat.positive,
        negative: dat.negative
    }
    const dattta = Chartdat.reverse();
    console.log(dattta);
    const myFunction = (date) => {
        console.log(date);
        // You can perform any other actions here
    };
    return (
        <div className={styles.container}>
            <Cards data={modified} />
            <CountryPicker datta={dattta.slice(0, 10)} myFunction={myFunction} />
            <Charts Chartdat={dattta} />

        </div>
    )
}

export default App;