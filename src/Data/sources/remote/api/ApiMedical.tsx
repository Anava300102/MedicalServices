import axios from "axios"

const ApiMedical = axios.create({
    baseURL: 'http://192.168.100.31:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
}) 

export {ApiMedical}