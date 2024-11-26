import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducer/citiesReducer.js';
import authReducer from './reducer/authReducer.js';

const store = configureStore  ({
    reducer: {
        cities: citiesReducer,
        auth: authReducer
    }
})

export default store
