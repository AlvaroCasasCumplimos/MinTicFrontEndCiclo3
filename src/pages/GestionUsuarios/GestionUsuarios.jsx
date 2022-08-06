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
      name_user: "",
      address: "",
      phone: ""
    });
    const [showModal, setShowModal] = useState(false);
    const [GestionUsuarios, setUsuarios] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
        name_user: "",
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
              name_user,
              address,
              phone,
              created_at,
              updated_at
          }) => {
            return {
              name_user,
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
      if (datos.name_user !== ""){

      }else{
          crearUsuario({
              name_user:datos.name_user,
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
    const headers = ["Name User", "address","phone"];
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
              name_user:tableUsuarios[x].name_user,
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
              id="name_user"
              label="name_user"
              type="text"
              name="name_user"
              required
              value={datos.name_user}
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
            <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id !== "" ?  "Actualizar Proveedor" : "Agregar Proveedor"}</Button>
          </form>
      </Modal>
      </>
    );
  };
  
export default GestionUsuarios