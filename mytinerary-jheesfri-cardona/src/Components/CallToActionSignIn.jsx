import react from "react";
import { useNavigate } from "react-router-dom";

export const CallToActionSignIn = () => {

    const navigate = useNavigate()

    function goToLogin() {
        navigate("/SignIn")
    }

    return (
        <div className="flex items-center justify-center">
            <button onClick={() => goToLogin()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign In
            </button>
        </div>
    )
} 