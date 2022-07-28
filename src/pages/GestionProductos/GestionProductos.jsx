import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./gestionProductos.css";

const GestionProductos = () => {
    const data = [
        {
          Id: 1,
          Producto: "Tomate",
          Descrip: "Hortaliza",
          PrecioVenta: 500,
        },
        {
            Id: 2,
            Producto: "Manzana",
            Descrip: "Fruta",
            PrecioVenta: 800,
          },
          {
            Id: 3,
            Producto: "Lechuga",
            Descrip: "Hottaliza",
            PrecioVenta: 1200,
          },
    ];

    const headers = ["Id", "Producto", "Descrip","PrecioVenta"];
    return(
        //
<div className="containerInnerModules">
        <h1>Creación de Productos</h1>
          <form>
            <input type="Id" placeholder="Id del Producto"/>
            <input type="Producto" placeholder="Nombre del Producto"/>
            <input type="Descrip" placeholder="Descripcion del producto"/>
            <input type="PrecioVenta" placeholder="Precio para venta"/>
            
          </form>
          
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Crear Producto</Button>
      </Stack>
      
      <h1>Actualización y eliminación de Productos</h1>
          <form>
            <input type="Id" placeholder="Id del Producto a actualizar"/>
            <input type="Producto" placeholder="Nombre nuevo del Producto"/>
            <input type="Descrip" placeholder="Descripcion nueva del Producto"/>
            <input type="PrecioVenta" placeholder="Nuevo precio para venta"/>
          
          </form>
      <Stack spacing={2} direction="row">
        <Button  variant="contained" color="success"  size="large" >Actualizar Producto</Button>
        <Button  variant="contained" color="success"  size="large" >Eliminar Producto</Button>
      </Stack>

      <h1>Lista de Productos</h1>

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
export default GestionProductos