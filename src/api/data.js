import axios from 'axios';

const DATA_URL = 'https://mockurl.com';

export function getRestaurantData(params) {
  return axios.get(DATA_URL, { params });
}

export function makeOrderRequest(payload) {
  return axios.post(DATA_URL, { payload });
}
