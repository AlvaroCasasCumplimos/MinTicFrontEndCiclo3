import {
    Button,
    Stack
  } from "@mui/material";
  import { Component, useCallback, useEffect, useMemo, useState } from "react";
import Input from "../../componets/Input";
import Modal from "../../componets/Modal/Modal";
  import TableModules from "../../componets/TableModules/TableModules";
  import "./Inventario.css";
import { consultaInventario, crearInventario } from "./utils/fetchInventario";

const Inventario = () => {

    const [datos, setDatos] = useState({
      id:"",
      id_producto: "",
      amount: "",
      price:""
    });
    
    const [showModal, setShowModal] = useState(false);
    const [inventarios, setInventarios] = useState([]);
    const handleClose = useCallback(() => {
      setDatos({
        id:"",
        id_producto: "",
        amount: "",
        price:""
      })
      fetchInventariosFunc()
      setShowModal(false);
    }, []);
    
    const tableInventarios = useMemo(() => {
      return [
      ...inventarios.map(
        (
          {
            id,
            id_producto,
            amount,
            price,
            created_at,
            updated_at
          }
        ) => {
          return {
            id,
            id_producto,
            amount,
            price,
          };
        }
      ),];
    }, [inventarios]);
      useEffect(() => {
        fetchInventariosFunc()
      }, [])
      
      const fetchInventariosFunc = useCallback(() => {
        consultaInventario({ })
          .then((autoArr) => {
            setInventarios(autoArr ?? []);
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
            crearInventario({
                id_producto:datos.id_producto,
                amount:datos.amount,
                price:datos.price, 
            })
          .then((autoArr) => {
            console.log(autoArr)
            handleClose()
          })
          .catch((err) => console.error(err));
        }
      }
      const headers = ["Id", "Id producto", "Cantidad", "Precio"];
      return (
        <>
        <div className="containerInnerModules">
              
          <Stack spacing={2} direction="row">
            <Button onClick={()=>setShowModal(true)}  variant="contained" color="success"  size="large" >Agregar inventario</Button>
          </Stack>
        
    
          <h1>Inventario</h1>
    
          <TableModules
            data={tableInventarios??[]}
            headers={headers}
            onSelectRow={(y, x) => {
              setShowModal(true)
              setDatos((old)=>({
                id:tableInventarios[x].id,
                id_producto:tableInventarios[x].id_producto,
                amount:tableInventarios[x].amount,
                price:tableInventarios[x].price,
              }))
            }}
          />
    
    
        </div>
        <Modal show={showModal} handleClose={handleClose} >
        <form
              className="formContainer"
              onSubmit={onSubmit}
            >
              <h1>{datos.id !== "" ?  "Actualizar inventario" : "Agregar inventario"}</h1>
              <Input
                id="id_producto"
                label="Id producto"
                type="text"
                name="id_producto"
                required
                value={datos.id_producto}
                onInput={onChange}
              ></Input>
              <Input
                id="amount"
                label="Cantidad"
                type="number"
                name="amount"
                required
                value={datos.amount}
                onInput={onChange}
              ></Input>
              <Input
                id="price"
                label="Precio"
                type="number"
                name="price"
                required
                value={datos.price}
                onInput={onChange}
              ></Input>
              <Button type="submit"  variant="contained" color="success"  size="large" >{datos.id !== "" ?  "Actualizar inventario" : "Agregar inventario"}</Button>
            </form>
        </Modal>
        </>
      );
    };
export default Inventario