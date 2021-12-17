import { createStore } from '@reduxjs/toolkit';
import { walletReducer } from './reducers/walletReducer';

const store = createStore(walletReducer)

export default store;