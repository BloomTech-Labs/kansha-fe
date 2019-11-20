import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('id_token');
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: process.env.BASE_URL
  });
};