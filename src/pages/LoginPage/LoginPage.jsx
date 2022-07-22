import { useContext, useState } from "react";
import Input from "../../componets/Input";
import { AuthContext } from "../../context/auth/AuthContext";
import "./loginPage.css";
const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [datosInicio, setDatosInicio] = useState({
    user: "",
    password: "",
  });
  return (
    <div className="container">
      <div className="containerLogin">
        <form
          className="formContainer"
          onSubmit={(e) => {
            e.preventDefault();
            login({
              email: datosInicio.username,
              password: datosInicio.password,
            });
          }}
        >
          <h1>login</h1>
          <Input
            id="user"
            label="Nombre de usuario"
            type="text"
            name="user"
            required
            value={datosInicio.user}
            onInput={(e) => {
              setDatosInicio((old) => {
                return { ...old, user: e.target.value };
              });
            }}
          ></Input>
          <Input
            id="password"
            label="Contraseña"
            type="password"
            name="password"
            required
            value={datosInicio.password}
            onInput={(e) => {
              setDatosInicio((old) => {
                return { ...old, password: e.target.value };
              });
            }}
          ></Input>
          <button className="buttonLogin">Login</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
