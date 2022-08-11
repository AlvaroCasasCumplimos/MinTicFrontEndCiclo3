import fetchData from "../../../utils/fetchData";
const urlOrganica = "https://trazaorganica-agrocultiva.herokuapp.com/api"

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

  export const actualizarProveedor = async (num, obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/provider/${num}`,
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
  
  export const eliminarProveedor = async (num) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/provider/${num}`,
        "DELETE",
      );
      return res;
    } catch (err) {
      throw err;
    }
  };