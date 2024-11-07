import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducer/citiesReducer.js';

const store = configureStore  ({
    reducer: {
        cities: citiesReducer
    }
})

export default store
