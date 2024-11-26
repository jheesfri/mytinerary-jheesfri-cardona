import React from "react";

export default function GoogleLoginButton() {
    const handleGoogleLogin = () => {
        // Redirige al usuario al endpoint del backend que maneja la autenticación de Google
        window.location.href = "http://localhost:8080/mytinerary/auth/signInGoogle";
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
            />
            Login with Google
        </button>
    );
}
