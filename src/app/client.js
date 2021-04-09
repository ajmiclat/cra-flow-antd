// @flow
import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const { REACT_APP_API_URL } = process.env;

const client = applyCaseMiddleware(
  axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
);

export default client;
