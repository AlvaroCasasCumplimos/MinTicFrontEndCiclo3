import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./buyItems.css";

const BuyItems = () => {

    const data = [
        {
          IdProd: 1,
          NameProd: "Tomate",
          Descrip: "Verdura",
          Cantidad: 2,
          PrecioUnd: 5000,
          Total: 0,
        },
    ]

    const headers = ["IdProd", "NameProd", "Descrip", "Cantidad","PrecioUnd","Total"];

    return(
        
        <div>

            <h1>Informacion del Proveedor</h1>
                <h3>ID Proveedor: <select onChange={""}></select></h3>
                <h3>Nombre Proveedor: <input type="" placeholder="Nombre del Proveedor"/></h3>
                <h3>Contacto Proveedor: <input type="" placeholder="Contacto del Proveedor"/></h3>
                <h3>Email Proveedor: <input type="" placeholder="Email del Proveedor"/></h3>

            <h1>Producto a agregar a la orden</h1>
                <h3>ID Producto: <select onChange={"IdProd"} ></select></h3>
                <input type="NameProd" placeholder="Nombre del Producto"/>
                <input type="Descrip" placeholder="Descripción del Producto"/>
                <input type="Cantidad" placeholder="Cantidad a comprar"/>
                <input type="PrecioUnd" placeholder="Precio x Und compra"/>
                <input type="Total" placeholder="Precio sub-Total Compra"/>
                <h3> </h3>
                <Stack spacing={2} direction="row">
                    <Button  variant="contained" color="success"  size="large" >Agregar Producto</Button>
                    <Button  variant="contained" color="success"  size="large" >Eliminar Producto</Button>
                </Stack>


            <h1>Lista de Productos de la orden</h1>

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
export default BuyItems