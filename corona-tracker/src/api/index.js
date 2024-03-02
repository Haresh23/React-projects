import axios from 'axios';

const url = 'https://api.covidtracking.com/v1/us/daily.json';

export const fetchDailyData = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
}