import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

const setUser = createAction('setUser', (datos) => {
    return {
        payload: datos
    }
})

const logOut = createAction('logOut')

const logIn = createAsyncThunk('logIn', async ({ email, password }) => {
    try {
        const credentials = {
            email: email,
            password: password
        }
        const response = await axios.post('http://localhost:8080/mytinerary/auth/signIn', credentials)

        localStorage.setItem('token', response.data.token)
        return response.data
    }
    catch (error) {
        console.log('Error', error)
    }
})

export { logIn, setUser, logOut }
