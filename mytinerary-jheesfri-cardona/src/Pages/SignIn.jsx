import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../store/actions/authAction";

const SignIn = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
dispatch(logIn(credentials))
        
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    className="border rounded p-2 w-full"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    className="border rounded p-2 w-full"
                />
            </label>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">
                Sign In
            </button>
        </form>
    );
};

export default SignIn;
