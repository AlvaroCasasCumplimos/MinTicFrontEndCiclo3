import {
  Button,
  Stack
} from "@mui/material";
import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionProveedores.css";
import { consultaProveedores, crearProveedor, actualizarProveedor, eliminarProveedor } from "./utils/fetchProveedores";

const GestionProveedores = () => {

  const [datos, setDatos] = useState({
      id_people: "",
      id:"",
      uen: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionProveedores, setProveedores] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
        id_people:"",
        id:"",
        uen:"",
      })
      fetchProveedoresFunc()
      setShowModal(false);
    }, []);
    const tableProveedores = useMemo(() => {
      return [
        ...GestionProveedores.map(
          ({
              id_people,
              id,
              uen,
              created_at,
              updated_at
          }) => {
            return {
              id_people,
              id,
              uen,
            };
          }
        ),
      ];
    }, [GestionProveedores]);
    useEffect(() => {
      fetchProveedoresFunc()
    }, [])
    const fetchProveedoresFunc = useCallback(() => {
      consultaProveedores({ })
        .then((autoArr) => {
          setProveedores(autoArr ?? []);
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
        actualizarProveedor(datos.id,{
          id_people:datos.id_people,
          uen:datos.uen
        })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
      }else{
          crearProveedor({
              id_people:datos.id_people,
              uen:datos.uen, 
          })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
        .catch((err) => console.error(err));
      }
    }
    const headers = ["Id People","id", "UEN"];
    return (
      <>
      <div className="containerInnerModules">
            
        <Stack spacing={2} direction="row">
          <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Agregar Proveedor</Button>
        </Stack>
      
  
        <h1>Proveedores</h1>
  
        <TableModules
          data={tableProveedores??[]}
          headers={headers}
          onSelectRow={(y, x) => {
            setShowModal(true)
            setDatos((old)=>({
              id_people:tableProveedores[x].id_people,
              id:tableProveedores[x].id,
              uen:tableProveedores[x].uen,
            }))
          }}
        />
  
  
      </div>
      <Modal show={showModal} handleClose={handleClose} >
      <form
            className="formContainer"
            onSubmit={onSubmit}
          >
            <h1>{datos.id !== "" ?  "Actualizar Proveedor" : "Agregar Proveedor"}</h1>
            <Input
              id="id_people"
              label="Id_people"
              type="number"
              name="id_people"
              required
              value={datos.id_people}
              onInput={onChange}
            ></Input>
            <Input
              id="uen"
              label="uen"
              type="text"
              name="uen"
              required
              value={datos.uen}
              onInput={onChange}
            ></Input>
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id !== "" ?  "Actualizar Proveedor" : "Agregar Proveedor"}</Button>
          
            <h1></h1>

{datos.id &&
<Button onClick={()=>eliminarProveedor(datos.id).then((autoArr) => {
  console.log(autoArr)
  handleClose()
})} type="submit"  variant="contained" color="error"  size="large" >Eliminar Proveedor</Button>
}
          
          
          </form>
      </Modal>
      </>
    );
  };
  
export default GestionProveedores