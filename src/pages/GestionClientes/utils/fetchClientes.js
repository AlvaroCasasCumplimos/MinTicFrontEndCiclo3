import fetchData from "../../../utils/fetchData";
const urlOrganica = "http://trazaorganica-agrocultiva.herokuapp.com/api"

export const consultaClientes = async () => {
    try {
      const res = await fetchData(
        `${urlOrganica}/client`,
        "GET",
        {},
        {},
        {},
      );
      return res;
    } catch (err) {
      throw err;
    }
  };

export const crearCliente = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/client`,
        "POST",
        {},
        obj,
        {},
      );
      return res;
    } catch (err) {
      throw err;
    }
  };

  export const actualizarCliente = async (num, obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/client/${num}`,
        "PUT",
        {},
        obj,
        {},
      );
      return res;
    } catch (err) {
      throw err;
    }
  };
  
  export const eliminarCliente = async (num) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/client/${num}`,
        "DELETE",
      );
      return res;
    } catch (err) {
      throw err;
    }
  };
  