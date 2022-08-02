import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080';

interface GetWithParams {
  url: string;
  config: any;
  callback: any;
}

export class HttpRequest {
  axios: AxiosInstance;

  constructor(baseURL = BASE_URL) {
    this.axios = axios.create({
      baseURL,
    });
  }

  async getWithParams({ url = '', config = {}, callback }: GetWithParams) {
    const response = await this.axios.get(url, { params: config });
    callback(response);
  }

  async get<T>(url: string) {
    const res = await this.axios.get<T>(url);
    return res;
  }

  async post<T>(url: string, data: T) {
    const response = await this.axios.post(url, data);
    return response;
  }

  async patch<T>(url: string, data: T) {
    const response = await this.axios.patch(url, data);
    return response;
  }

  async delete(url: string) {
    const response = await this.axios.delete(url);
    return response;
  }

  async put<T>(url: string, data: T) {
    const response = await this.axios.put(url, data);
    return response;
  }
}
