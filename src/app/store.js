import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import client from './client';
import history from './history';

export default configureStore({
  reducer: {
    router: connectRouter(history),
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: { client },
      },
    })
    .concat(routerMiddleware(history));
  },
  devTools: process.env.NODE_ENV !== 'production',
});
