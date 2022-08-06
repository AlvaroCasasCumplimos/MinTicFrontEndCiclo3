import fetchData from "../../../utils/fetchData";
const urlOrganica = "http://trazaorganica-agrocultiva.herokuapp.com/api"

export const consultaProductos = async () => {
    try {
      const res = await fetchData(
        `${urlOrganica}/product`,
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

export const crearProducto = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/product`,
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