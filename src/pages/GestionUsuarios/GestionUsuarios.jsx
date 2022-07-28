import {
  Button,
  Stack
} from "@mui/material";
import { Component } from "react";
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
  return (
    <div className="containerInnerModules">
      <h1>Creación de usuarios</h1>
          <form>
            <input type="Id" placeholder="Id del Usuario"/>
            <input type="Name" placeholder="Nombre del Usuario"/>
            <input type="obj" placeholder="Rol"/>
            <input type="COm" placeholder="Contraseña"/>
            
          </form>
          
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Crear usuario</Button>
      </Stack>
      
      <h1>Actualización y eliminación de usuarios</h1>
          <form>
            <input type="Id" placeholder="Id del usuario a actualizar"/>
            <input type="Name" placeholder="Nombre nuevo"/>
            <input type="obj" placeholder="Rol nuevo"/>
            <input type="COm" placeholder="Contraseña nueva"/>
          </form>
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Actualizar usuario</Button>
        <Button  variant="contained" color="success"  size="large" >Eliminar usuario</Button>
      </Stack>

      <h1>Lista de usuarios</h1>

      <TableModules
        data={data}
        headers={headers}
        onSelectRow={(x, y) => {
          console.log(`sleeee${x},${y}`);
        }}
      />
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Actualizar Listado</Button>
      </Stack>
    </div>
  );
};
export default GestionUsuarios;
