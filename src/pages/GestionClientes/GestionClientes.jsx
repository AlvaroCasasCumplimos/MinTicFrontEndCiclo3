import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./gestionClientes.css";

const GestionClientes = () => {

    const data = [
        {
          id: 1,
          name: "Cliente 1",
          Contacto: "31467765465",
          email: "Cli1@hotmail.com",
        },
        {
            id: 2,
            name: "Cliente 2",
            Contacto: "31467765465",
            email: "Cli2@hotmail.com",
          },
    ]

    const headers = ["Id", "Name", "Contacto", "email"];

    return(
    <div className="containerInnerModules">
      <h1>Creación de Clientes</h1>
          <form>
            <input type="Id" placeholder="Id del Cliente"/>
            <input type="Name" placeholder="Nombre del Cliente"/>
            <input type="Contacto" placeholder="Numero de Cliente"/>
            <input type="email" placeholder="Correo electrónico"/>
            
          </form>
          
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Crear Cliente</Button>
      </Stack>
      
      <h1>Actualización y eliminación de Clientes</h1>
          <form>
            <input type="Id" placeholder="Id del Cliente a actualizar"/>
            <input type="Name" placeholder="Nombre nuevo"/>
            <input type="Contacto" placeholder="Contacto nuevo"/>
            <input type="email" placeholder="email nuevo"/>
            
          </form>
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Actualizar Cliente</Button>
        <Button  variant="contained" color="success"  size="large" >Eliminar Cliente</Button>
      </Stack>

      <h1>Lista de Clientees</h1>

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
    )
}
export default GestionClientes