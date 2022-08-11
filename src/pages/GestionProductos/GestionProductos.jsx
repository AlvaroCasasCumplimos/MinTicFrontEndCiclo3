import {
  Button,
  Stack
} from "@mui/material";
import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionProductos.css";
import { consultaProductos, crearProducto, actualizarProducto, eliminarProducto } from "./utils/fetchProductos";

const GestionProductos = () => {

  const [datos, setDatos] = useState({
      id:"",
      name:"",
      description: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionProductos, setProductos] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
          id:"",
          name:"",
          description: "",
      })
      fetchProductosFunc()
      setShowModal(false);
    }, []);
    const tableProductos = useMemo(() => {
      return [
        ...GestionProductos.map(
          ({
              id,
              name,
              description,
              created_at,
              updated_at
          }) => {
            return {
              id,
              name,
              description,
            };
          }
        ),
      ];
    }, [GestionProductos]);
    useEffect(() => {
      fetchProductosFunc()
    }, [])
    const fetchProductosFunc = useCallback(() => {
      consultaProductos({ })
        .then((autoArr) => {
          setProductos(autoArr ?? []);
        })
        .catch((err) => console.error(err));
    }, []);
    const onChange = (ev) =>{
      setDatos((old)=>({
          ...old,
          [ev.target.name]:ev.target.value
      }))
    }
    const onSubmit = (ev) =>{
      ev.preventDefault();
      if (datos.id !== ""){
        actualizarProducto(datos.id,{
          id:datos.id,
          name:datos.name,
          description:datos.description
        })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
      }else{
          crearProducto({
              name:datos.name,
              description:datos.description,
          })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
        .catch((err) => console.error(err));
      }
    }
    const headers = ["id","name", "Description"];
    return (
      <>
      <div className="containerInnerModules">
            
        <Stack spacing={2} direction="row">
          <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Agregar Producto</Button>
        </Stack>
      
        <h1>Productos</h1>
  
        <TableModules
          data={tableProductos??[]}
          headers={headers}
          onSelectRow={(y, x) => {
            setShowModal(true)
            setDatos((old)=>({
              name:tableProductos[x].name,
              id:tableProductos[x].id,
              description:tableProductos[x].description,
            }))
          }}
        />
  
  
      </div>
      <Modal show={showModal} handleClose={handleClose} >
      <form
            className="formContainer"
            onSubmit={onSubmit}
          >
            <h1>{datos.id !== "" ?  "Actualizar Productos" : "Agregar Producto"}</h1>
            <Input
              id="name"
              label="name"
              type="text"
              name="name"
              required
              value={datos.name}
              onInput={onChange}
            ></Input>
            <Input
              id="description"
              label="description"
              type="text"
              name="description"
              required
              value={datos.description}
              onInput={onChange}
            ></Input>
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id !== "" ?  "Actualizar Productos" : "Agregar Productos"}</Button>
          
            <h1></h1>

{datos.id &&
<Button onClick={()=>eliminarProducto(datos.id).then((autoArr) => {
  console.log(autoArr)
  handleClose()
})} type="submit"  variant="contained" color="error"  size="large" >Eliminar Producto</Button>
}

          
          </form>
      </Modal>
      </>
    );
  };
export default GestionProductos