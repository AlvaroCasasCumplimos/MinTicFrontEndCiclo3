import {
  Button,
  Stack
} from "@mui/material";
import { useCallback, useState } from "react";
import { Component } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionUsuarios.css";

const GestionUsuarios = () => {
  const data = [
    {
      id: 1,
      name: "Juan",
      objs: "Administrador",
      com: "contraseña",
    },
    {
      id: 2,
      name: "Pepe",
      objs: "Comprador",
      com: "1234",
    },
    {
      id: 3,
      name: "Lucas",
      objs: "Vendedor",
      com: "98741",
    },
    {
      id: 4,
      name: "Sofia",
      objs: "Vendedor",
      com: "abcd",
    },
    {
      id: 5,
      name: "Veronica",
      objs: "Comprador",
      com: "ASdasdas",
    },
    {
      id: 6,
      name: "Gustavo",
      objs: "Administrador",
      com: "QWER",
    },
    {
      id: 7,
      name: "Ana",
      objs: "Vendedor",
      com: "45682",
    },
    {
      id: 8,
      name: "Fabio",
      objs: "Vendedor",
      com: "alkjsdh",
    },
  ];
  const headers = ["Id", "Name", "obj", "COm"];
  const [datos, setDatos] = useState({
    id:"",
    nombre: "",
    password: "",
    role:""
  });
  const [showModal, setShowModal] = useState(false);
  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
    <div className="containerInnerModules">
          
      <Stack spacing={2} direction="row">
        <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Crear usuario</Button>
      </Stack>
    

      <h1>Lista de usuarios</h1>

      <TableModules
        data={data}
        headers={headers}
        onSelectRow={(x, y) => {
          setShowModal(true)
          setDatos((old)=>({
            ...old,
          }))
          console.log(`sleeee${x},${y}`);
        }}
      />


    </div>
    <Modal show={showModal} handleClose={handleClose} >
    <form
          className="formContainer"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1>Actualizar usuario</h1>
          <Input
            id="user"
            label="Nombre de usuario"
            type="text"
            name="user"
            required
            value={datos.nombre}
            onInput={(e) => {
              setDatos((old) => {
                return { ...old, nombre: e.target.value };
              });
            }}
          ></Input>
          <Input
            id="role"
            label="Rol del usuario"
            type="text"
            name="role"
            required
            value={datos.role}
            onInput={(e) => {
              setDatos((old) => {
                return { ...old, role: e.target.value };
              });
            }}
          ></Input>
          <Input
            id="password"
            label="Contraseña"
            type="password"
            name="password"
            required
            value={datos.password}
            onInput={(e) => {
              setDatos((old) => {
                return { ...old, password: e.target.value };
              });
            }}
          ></Input>
          <Button  variant="contained" color="success"  size="large" >Actualizar usuario</Button>
        </form>
    </Modal>
    </>
  );
};
export default GestionUsuarios;
