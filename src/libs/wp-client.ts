import axios, { AxiosRequestConfig } from 'axios';
import * as AxiosLogger from 'axios-logger';

const API_KEY = process.env.WP_API_KEY;

const config: AxiosRequestConfig = {
  baseURL: process.env.WP_DOMAIN,
  timeout: 120000,
  headers: {
    Authorization: `Basic ${API_KEY}`,
  },
};

const apiClient = axios.create(config);
// apiClient.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
// apiClient.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);

export default apiClient;
