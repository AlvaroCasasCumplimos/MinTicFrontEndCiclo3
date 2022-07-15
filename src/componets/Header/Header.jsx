import { useContext } from "react"
import { AuthContext } from "../../context/auth/AuthContext"
import { useNavigate } from "react-router-dom";
import "./header.css";
const Header = () =>{
    const {logout,role,name} = useContext(AuthContext)
    const navigate = useNavigate()

    const logoutClick = () =>{
        logout()
        navigate("/login",{
            replace:true
        })
    }
    return(
        <div className="containerHeader">
            <h1>{`Usuario: ${name}`}</h1>
            <h1>Modulo de navegacion</h1>
        <button onClick={logoutClick}>Logout</button>
        </div>
        )
}

export default Header