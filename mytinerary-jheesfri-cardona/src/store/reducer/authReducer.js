import { createReducer } from "@reduxjs/toolkit";
import { logIn, logOut, setUser } from "../../store/actions/authAction.js";

const initialState = {  
    loading : false,
    error : false,
    user : null,
    token : localStorage.getItem("token") || null
}

 const authReducer = createReducer(initialState,(builder) => {
    builder.addCase(logIn.fulfilled,(state,action)=>{
        console.log("cuto correctly");
        console.log(action);
        state.loading = false,
        state.error = false,
        state.user = action.payload.user,
        state.token = action.payload.token
    })
    .addCase(logIn.pending,(state,action)=>{
        console.log("Sign in with successfull");
        console.log(action);
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(logIn.rejected,(state,action)=>{
        console.log("Error en el sign in");
        localStorage.removeItem("token");
        state.loading = false,
        state.error = action.error.message,
        state.user = null,
        state.token = null
    })

    .addCase(setUser,(state,action)=>{
        state.user = action.payload.user,
        state.token = action.payload.token
    })

    .addCase(logOut,(state,action)=>{
        localStorage.removeItem("token");
        state.user = null,
        state.token = null
    })

})

export default authReducer;