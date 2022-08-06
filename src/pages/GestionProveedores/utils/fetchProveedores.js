import fetchData from "../../../utils/fetchData";
const urlOrganica = "http://trazaorganica-agrocultiva.herokuapp.com/api"

export const consultaProveedores = async () => {
    try {
      const res = await fetchData(
        `${urlOrganica}/provider`,
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

export const crearProveedor = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/provider`,
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