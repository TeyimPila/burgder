import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-fd5ce.firebaseio.com/'
});

export default instance;