import React from "react";
import { CardContent, Typography } from "@mui/material";
import CountUp from 'react-countup';
import style from './Cards.module.css';

const infStyle = {
    borderBottomColor: 'rgba(0, 0, 255, 0.5)'
};
const recStyle = {
    borderBottomColor: 'rgba(0, 255, 0, 0.5)'
};
const deathStyle = {
    borderBottomColor: 'rgba(255, 0, 0, 0.5)'
};
const ReportCard = (props) => {

    return (
        <CardContent className={style.content} style={props.cardType === "Infected" ? infStyle : (props.cardType === "Recovered" ? recStyle : deathStyle)}>
            <Typography color="GrayText">{props.cardType}</Typography>
            <Typography >
                <CountUp
                    start={0}
                    end={props.cardType === "Infected" ? (props.data.positive) : (props.cardType === "Recovered" ? (props.data.negative) : (props.data.death))}
                    duration={3}
                />
            </Typography>
            <Typography color="GrayText">{new Date(props.data.date).toUTCString()}</Typography>
            <Typography color="GrayText" fontSize="10px">Number of active cases frokm covid-19.</Typography>
        </CardContent>
    )
}

export default ReportCard;