import { useContext } from "react"
import { AuthContext } from "../context/auth/AuthContext"
import {Navigate } from "react-router-dom";



export const PrivateRoute = ({children}) =>{
    const {role} = useContext(AuthContext)

    return(role)? children:<Navigate to="/login" />

}