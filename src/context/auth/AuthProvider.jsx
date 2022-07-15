import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer, initialState } from "./authReducer"
import { types } from "./types"


const initFunc = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return {
        name: user?.name ?? "null",
        lastName:user?.lastName ?? null,
        email: user?.email ?? null,
        role:user?.role ?? null
    }
}

export const AuthProvider = ({children}) =>{

    const [authState, dispatch] = useReducer(authReducer, initialState,initFunc)

    const login = ({email,password}) =>{

        const data = {
            name: "Prueba",
            lastName:"Apellido",
            email:"sss",
            role:"1"
        }
        const action = {
            type:types.login,
            payload:{
                ...data
            }
        }
        localStorage.setItem("user",JSON.stringify(data))
        dispatch(action)
    }
    const logout = () =>{
        localStorage.removeItem("user")
        const action = {
            type:types.logout,
        }
        dispatch(action)
    }
    return(
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}