import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./Inventario.css";

const Inventario = () => {

    const data = [
        {
          IdProducto: 1,
          Producto: "Tomate",
          Descrip: "Hortaliza",
          CantidadDisp: 400,
          IdProveedor: 2,
          PrecioStock: 1000
        },
    ]

    const headers = ["IdProducto", "Producto", "Descrip","CantidadDisp","IdProveedor","PrecioStock"];

    return(
        <div>
            <h1>Filtros de Inventario</h1>
                <h3>ID Proveedor: <select onChange={""}></select></h3>
                <h3>ID Producto: <select onChange={""}></select></h3>

            <h1>Lista de Inventario</h1>

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
export default Inventario