import { useReducer } from "react";
import { notify, notifyError } from "../../utils/notify";
import { AuthContext } from "./AuthContext";
import { authReducer, initialState } from "./authReducer";
import { loginFetch } from "./fetchAuth";
import { types } from "./types";

const initFunc = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    name: user?.name ?? "null",
    lastName: user?.lastName ?? null,
    email: user?.email ?? null,
    role: user?.role ?? null,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, initFunc);

  const login = ({email, password} ) => {
    loginFetch({email,password })
    .then((autoArr) => {
      if(autoArr?.errors)
        return notifyError(autoArr?.message ?? "Error en el tipado")
        if(autoArr?.status === 0)
        return notifyError(autoArr?.msg ?? "Error inicio de sesión")
      const data = {
        name: "Usuario",
        lastName: "Apellido",
        email,
        role: "1",
        token:autoArr?.access_token
      };
      const action = {
        type: types.login,
        payload: {
          ...data,
        },
      };
      localStorage.setItem("user", JSON.stringify(data));
      notify(autoArr?.msg ?? "Inicio de sesion exitoso")
      dispatch(action);
    })
    .catch((err) => console.error(err));
  };
  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };
  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
