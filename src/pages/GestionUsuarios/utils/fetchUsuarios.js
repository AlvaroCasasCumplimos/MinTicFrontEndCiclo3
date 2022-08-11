import fetchData from "../../../utils/fetchData";
const urlOrganica = "https://trazaorganica-agrocultiva.herokuapp.com/api"

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


  export const actualizarUsuario = async (num, obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/person/${num}`,
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
  
  export const eliminarUsuario = async (num) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/person/${num}`,
        "DELETE",
      );
      return res;
    } catch (err) {
      throw err;
    }
  };