import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true
})

const UseAxios = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        axiosInstance.interceptors.response.use(response => {
            return response

        }, error => {
            if (error.status === 401 || error.status === 403) {
                logOut()
                navigate('/login')

            }
            return Promise.reject(error)
        }

        )

    }, [])

    return axiosInstance;

};

export default UseAxios;