import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);



export const setCities = createAction("SET_CITIES")
export const setCitySeleted = createAction("SET_CITY_SELETED")
export const setItineraries = createAction("SET_ITINERARIES")
export const setActivities = createAction("SET_ACTIVITIES")
export const setSearch = createAction("SET_SEARCH")

export const getCities = createAsyncThunk ('GET_CITIES', async (search) => {
    console.log('funcion asyncThunk');
    
    const response = await axios.get(`http://localhost:8080/mytinerary/cities/search?name=${search}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Incluyendo el token
        },
    });
    console.log(response);
    await new Promise((resolve)=> setTimeout(resolve, 1500))

    return response.data.response
    
})