import fetchData from "../../utils/fetchData";

const urlOrganica = "https://trazaorganica-agrocultiva.herokuapp.com/api"

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