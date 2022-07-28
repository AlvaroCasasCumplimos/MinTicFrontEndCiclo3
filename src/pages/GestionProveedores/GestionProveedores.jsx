import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./gestionProveedores.css";

const GestionProveedores = () => {

    const data = [
        {
          id: 1,
          name: "Finca Verduras",
          Contacto: "31467765465",
          email: "FincVerdur@hotmail.com",
          UEN: "UEN1",
        },
        {
            id: 2,
            name: "Finca Frutas",
            Contacto: "31467765465",
            email: "FincFrut@gmail.com",
            UEN: "UEN2",
          },
    ];
    const headers = ["Id", "Name", "Contacto", "email","UEN"];

    return(
        <div className="containerInnerModules">
      <h1>Creación de Proveedores</h1>
          <form>
            <input type="Id" placeholder="Id del Proveedor"/>
            <input type="Name" placeholder="Nombre del Proveedor"/>
            <input type="Contacto" placeholder="Numero de contacto"/>
            <input type="email" placeholder="Correo electrónico"/>
            <input type="UEN" placeholder="UEN"/>
            
          </form>
          
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Crear Proveedor</Button>
      </Stack>
      
      <h1>Actualización y eliminación de Proveedores</h1>
          <form>
            <input type="Id" placeholder="Id del Proveedor a actualizar"/>
            <input type="Name" placeholder="Nombre nuevo"/>
            <input type="Contacto" placeholder="Contacto nuevo"/>
            <input type="email" placeholder="email nuevo"/>
            <input type="UEN" placeholder="UEN nuevo"/>
          </form>
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Actualizar Proveedor</Button>
        <Button  variant="contained" color="success"  size="large" >Eliminar Proveedor</Button>
      </Stack>

      <h1>Lista de proveedores</h1>

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
export default GestionProveedores