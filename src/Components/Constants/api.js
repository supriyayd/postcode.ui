import axios, { AxiosPromise } from 'axios';
import React from 'react';


const baseURL= "https://localhost:49536/api/"

export const postApi = axios.create({
    baseURL: baseURL,
  });
  
  postApi.defaults.headers.common["Content-Type"] = "application/json";
  
  export const getPostcodes = async (skip, postcode) => {
    const response = await postApi.get(`postcodes?postcode=${postcode}&skip=${skip}`);
    return response.data;
  };
  
  export const getPostcodeDetails = async (postcode) => {
    const response = await postApi.get(`postcodes/${postcode}`);
    return response.data;
  };
  