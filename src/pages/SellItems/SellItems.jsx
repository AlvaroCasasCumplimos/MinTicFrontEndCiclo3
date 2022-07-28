import {
    Button,
    Stack
  } from "@mui/material";
  import { Component } from "react";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./SellItems.css";

const SellItems = () => {

    const data = [
        {
          IdProd: 1,
          NameProd: "Tomate",
          Descrip: "Verdura",
          CantidadDispon: 2,
          CantidadComprar: 1,
          PrecioVenta: 5000,
          Total: 0,
        },
    ]

    const headers = ["IdProd", "NameProd", "Descrip", "CantidadDispon", "CantidadComprar", "PrecioVenta","Total"];

    return(
        <div>

            <h1>Informacion del Cliente</h1>
                <h3>ID Cliente: <select onChange={""}></select></h3>
                <h3>Nombre Cliente: <input type="" placeholder="Nombre del Cliente"/></h3>
                <h3>Contacto Cliente: <input type="" placeholder="Contacto del Cliente"/></h3>
                <h3>Email Cliente: <input type="" placeholder="Email del Cliente"/></h3>

            <h1>Producto a agregar a la venta</h1>
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


            <h1>Lista de Productos de la venta</h1>

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
export default SellItems