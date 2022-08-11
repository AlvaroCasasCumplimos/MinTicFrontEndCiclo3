import fetchData from "../../utils/fetchData";

const urlOrganica = "http://trazaorganica-agrocultiva.herokuapp.com/api"

export const loginFetch = async (obj) => {
    try {
      const res = await fetchData(
        `${urlOrganica}/login`,
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