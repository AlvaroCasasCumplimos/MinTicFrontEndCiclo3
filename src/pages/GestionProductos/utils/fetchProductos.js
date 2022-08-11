import fetchData from "../../../utils/fetchData";
const urlOrganica = "https://trazaorganica-agrocultiva.herokuapp.com/api"

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

  export const actualizarProducto = async (num, obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/product/${num}`,
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
  
  export const eliminarProducto = async (num) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/product/${num}`,
        "DELETE",
      );
      return res;
    } catch (err) {
      throw err;
    }
  };