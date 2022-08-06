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