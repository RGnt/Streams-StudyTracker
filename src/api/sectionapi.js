import axios from 'axios';

export const getSections = () => {
    return axios.get('http://localhost:3000/Sections', {headers: {'Access-Control-Allow-Origin': '*'}}).then(response => console.log(response.data));
}