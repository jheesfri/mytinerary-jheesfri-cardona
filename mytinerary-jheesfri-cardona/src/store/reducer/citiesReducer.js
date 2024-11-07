import { createReducer } from '@reduxjs/toolkit';
import { setActivities, setCities, setCitySeleted, setItineraries, setSearch } from '../actions/citiesAction.js'


//estado inical 
const initialState = {
    cities: [],
    citySelect: [null],
    itineraries:[],
    search: "",
    activities: []
}

const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setCities, (state, action) => {
            state.cities = action.payload;
        })
        .addCase(setCitySeleted, (state, action) => {
            state.citySelect = action.payload;
        })
        .addCase(setItineraries, (state, action) => {
            state.itineraries = action.payload;
        })
        .addCase(setSearch, (state, action) => {
            state.search = action.payload;
        })
        .addCase(setActivities, (state, action) => {
            state.search = action.payload;
        })
});

export default citiesReducer
