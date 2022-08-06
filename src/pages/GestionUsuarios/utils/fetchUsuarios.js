import fetchData from "../../../utils/fetchData";
const urlOrganica = "http://trazaorganica-agrocultiva.herokuapp.com/api"

export const consultaUsuarios = async () => {
    try {
      const res = await fetchData(
        `${urlOrganica}/person`,
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

export const crearUsuario = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/person`,
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