import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.WP_DOMAIN,
  timeout: 120000,
};

const apiClient = axios.create(config);

export default apiClient;
