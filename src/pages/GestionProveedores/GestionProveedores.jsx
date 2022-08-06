import {
  Button,
  Stack
} from "@mui/material";
import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionProveedores.css";
import { consultaProveedores, crearProveedor } from "./utils/fetchProveedores";

const GestionProveedores = () => {

  const [datos, setDatos] = useState({
      id_people: "",
      uen: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionProveedores, setProveedores] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
        id_people:"",
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
              uen,
              created_at,
              updated_at
          }) => {
            return {
              id_people,
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
      if (datos.id_people !== ""){

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
    const headers = ["Id People", "UEN"];
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
            <h1>{datos.id_people !== "" ?  "Actualizar Proveedor" : "Agregar Proveedor"}</h1>
            <Input
              id="id_people"
              label="Id people"
              type="text"
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
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id_people !== "" ?  "Actualizar Proveedor" : "Agregar Proveedor"}</Button>
          </form>
      </Modal>
      </>
    );
  };
  
export default GestionProveedores