import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

const CountryPicker = ({ datta, myFunction }) => {
    let Chartdata = [];
    Chartdata = datta
    console.log(Chartdata)
    if (!Chartdata) {
        return null;
    }
    return (
        <FormControl>
            <Select defaultValue={''} onChange={(e) => myFunction(e.target.value)}>
                <MenuItem value={''}>Global</MenuItem>
                {Chartdata.map((e, i) => <MenuItem value={e.dateChecked} key={i}>{new Date(e.dateChecked).toLocaleDateString()}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default CountryPicker;