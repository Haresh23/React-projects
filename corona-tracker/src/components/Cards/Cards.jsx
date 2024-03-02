import React from "react";
import { Card, Grid } from '@mui/material';
import style from './Cards.module.css';
import ReportCard from "./ReportCard";


const Cards = (data) => {
    if (data.data === null) {
        return (
            <h3>Loading....</h3>
        )
    }
    return (
        <div className={style.container}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Card variant="outline">
                    <ReportCard data={data.data} cardType={'Infected'} />
                    <ReportCard data={data.data} cardType={'Recovered'} />
                    <ReportCard data={data.data} cardType={'Deaths'} />
                </Card>
            </Grid>
        </div>
    );
}

export default Cards;