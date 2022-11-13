import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5253',
  headers: {
    'Content-type': 'application/json'
  }
});

export default instance;