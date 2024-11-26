import { createReducer } from '@reduxjs/toolkit';
import { setActivities, setCitySeleted, setItineraries, setSearch, getCities } from '../actions/citiesAction.js'


//estado inical 
const initialState = {
    cities: [],
    citySelect: [null],
    itineraries:[],
    search: "",
    activities: [],
    loading: true,
    error: false
}

const citiesReducer = createReducer(initialState, (builder) => {
    builder
      
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
        }).
        addCase(getCities.pending, (state, action) => {
            console.log('estado pendiente');
            
            state.loading = true
        }).
        addCase(getCities.fulfilled, (state, action) => {
            console.log('estado exitoso');
            
            state.loading = false
            state.cities = action.payload
        }).
        addCase(getCities.rejected, (state) => {
            console.log('error');
            
            state.loading = false
            state.error = true
        })
})

export default citiesReducer
