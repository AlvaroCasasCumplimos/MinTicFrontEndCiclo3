import {
  Button,
  Stack
} from "@mui/material";
import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
import TableModules from "../../componets/TableModules/TableModules";
import "./gestionUsuarios.css";
import { consultaUsuarios, crearUsuario } from "./utils/fetchUsuarios";

const GestionUsuarios = () => {

  const [datos, setDatos] = useState({
      id: "",
      name: "",
      address: "",
      phone: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionUsuarios, setUsuarios] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
        id: "",
        name: "",
        address: "",
        phone: ""
      })
      fetchUsuariosFunc()
      setShowModal(false);
    }, []);
    const tableUsuarios = useMemo(() => {
      return [
        ...GestionUsuarios.map(
          ({
              id,
              name,
              address,
              phone,
              created_at,
              updated_at
          }) => {
            return {
              id,
              name,
              address,
              phone
            };
          }
        ),
      ];
    }, [GestionUsuarios]);
    useEffect(() => {
      fetchUsuariosFunc()
    }, [])
    const fetchUsuariosFunc = useCallback(() => {
      consultaUsuarios({ })
        .then((autoArr) => {
          setUsuarios(autoArr ?? []);
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

      }else{
          crearUsuario({
              name:datos.name,
              address:datos.address,
              phone:datos.address 
          })
        .then((autoArr) => {
          console.log(autoArr)
          handleClose()
        })
        .catch((err) => console.error(err));
      }
    }
    const headers = ["ID","Name", "address","phone"];
    return (
      <>
      <div className="containerInnerModules">
            
        <Stack spacing={2} direction="row">
          <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Agregar Usuarios</Button>
        </Stack>
      
  
        <h1>Usuarios</h1>
  
        <TableModules
          data={tableUsuarios??[]}
          headers={headers}
          onSelectRow={(y, x) => {
            setShowModal(true)
            setDatos((old)=>({
              id:tableUsuarios[x].id,
              name_user:tableUsuarios[x].name,
              address:tableUsuarios[x].address,
              phone:tableUsuarios[x].phone
            }))
          }}
        />
  
  
      </div>
      <Modal show={showModal} handleClose={handleClose} >
      <form
            className="formContainer"
            onSubmit={onSubmit}
          >
            <h1>{datos.id_people !== "" ?  "Actualizar Usuario" : "Agregar Usuarios"}</h1>
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
              id="address"
              label="address"
              type="text"
              name="address"
              required
              value={datos.address}
              onInput={onChange}
            ></Input>
            <Input
              id="phone"
              label="phone"
              type="text"
              name="phone"
              required
              value={datos.phone}
              onInput={onChange}
            ></Input>
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id !== "" ?  "Actualizar Usuario" : "Agregar Usuario"}</Button>
          </form>
      </Modal>
      </>
    );
  };
  
export default GestionUsuarios