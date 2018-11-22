import Axios from 'axios';

const unsplash = Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 43e189eb35642417b34726c9f791278377d3d25ed7e3ba0ec77812da71b2936e'
    }
});

export default unsplash;