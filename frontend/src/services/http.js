import axios from 'axios';

const axiosInstace = axios.create({
    baseURL:'http://localhost:8000',
    headers:{
        "Content-type":'application/json'
    }
});

export default axiosInstace;