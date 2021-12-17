import { createStore } from 'redux';
import { walletReducer } from '../reducers/walletReducer';

export default createStore(walletReducer);