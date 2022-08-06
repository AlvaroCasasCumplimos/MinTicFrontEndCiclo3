import {
  Button,
  Stack
} from "@mui/material";
import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionClientes.css";
import { consultaClientes, crearCliente } from "./utils/fetchClientes";

const GestionClientes = () => {

  const [datos, setDatos] = useState({
      id_people:"",
      typec: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionClientes, setClientes] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
          id_people:"",
          typec: "",
      })
      fetchClientesFunc()
      setShowModal(false);
    }, []);
    const tableClientes = useMemo(() => {
      return [
        ...GestionClientes.map(
          ({
            id_people,
            typec,
            created_at,
            updated_at
          }) => {
            return {
              id_people,
              typec,
            };
          }
        ),
      ];
    }, [GestionClientes]);
    useEffect(() => {
      fetchClientesFunc()
    }, [])
    const fetchClientesFunc = useCallback(() => {
      consultaClientes({ })
        .then((autoArr) => {
          setClientes(autoArr ?? []);
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
          crearCliente({
              id_people:datos.id_people,
              typec:datos.typec
          })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
        .catch((err) => console.error(err));
      }
    }
    const headers = ["id_people", "Type"];
    return (
      <>
      <div className="containerInnerModules">
            
        <Stack spacing={2} direction="row">
          <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Agregar Cliente</Button>
        </Stack>

  
        <h1>Clientes</h1>
  
        <TableModules
          data={tableClientes??[]}
          headers={headers}
          onSelectRow={(y, x) => {
            setShowModal(true)
            setDatos((old)=>({
              id_people:tableClientes[x].id_people,
              typec:tableClientes[x].typec,
            }))
          }}
        />
  
  
      </div>
      <Modal show={showModal} handleClose={handleClose} >
      <form
            className="formContainer"
            onSubmit={onSubmit}
          >
            <h1>{datos.id !== "" ?  "Actualizar Cliente" : "Agregar Cliente"}</h1>
            <Input
              id_people="id_people"
              type="text"
              name="id_people"
              required
              value={datos.id_people}
              onInput={onChange}
            ></Input>
            <Input
              typec="type"
              label="Cantidad"
              type="text"
              name="type"
              required
              value={datos.type}
              onInput={onChange}
            ></Input>
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id_people !== "" ?  "Actualizar Cliente" : "Agregar Cliente"}</Button>
          </form>
      </Modal>
      </>
    );
  };
export default GestionClientes