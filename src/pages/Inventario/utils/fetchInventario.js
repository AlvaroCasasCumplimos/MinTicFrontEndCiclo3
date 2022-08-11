import fetchData from "../../../utils/fetchData";
const urlOrganica = "https://trazaorganica-agrocultiva.herokuapp.com/api"

export const consultaInventario = async () => {
    try {
      const res = await fetchData(
        `${urlOrganica}/inventory`,
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

export const crearInventario = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/inventory`,
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

  export const actualizarInventario = async (num, obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/inventory/${num}`,
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
  
  export const eliminarInventario = async (num) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/inventory/${num}`,
        "DELETE",
      );
      return res;
    } catch (err) {
      throw err;
    }
  };