import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function SignRoute({ children }) {
console.log();

    const token = useSelector((state) => state.auth.token)
    console.log(token);
    
    if (token){
        return <Navigate to="/" replace></Navigate>}
return children
}

 export default SignRoute