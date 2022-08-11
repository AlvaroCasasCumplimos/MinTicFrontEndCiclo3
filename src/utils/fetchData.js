
const fetchData = async (
  url = "",
  method = "GET",
  queries = {},
  data = {},
  headers = {},
  timeout = 60000
) => {
  if (!["GET", "POST", "PUT", "DELETE"].includes(method)) {
    throw new Error("Method not suported");
  }

  if ("URLSearchParams" in window) {
    const params = new URLSearchParams();
    Object.entries(queries).forEach(([key, value]) => {
      params.append(key, value);
    });
    queries = params.toString();
  } else {
    queries = Object.entries(queries)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
  }
  if (method !== "POST" && queries.length > 0) {
    url += `?${queries}`;
  }

  const fetchOptions = { method: method };
  const _headers = {};
  fetchOptions.headers = {
    ..._headers,
    ...headers,
  };
  if (method === "POST" || method === "PUT") {
    if (data instanceof FormData) {
      fetchOptions.body = data;
    } else {
      fetchOptions.headers["Content-Type"] = "application/json";
      fetchOptions.headers["Accept"] = "application/json";
      fetchOptions.body = JSON.stringify(data);
    }
  }

  async function fetchWithTimeout(resource, options, timeout) {
  
    const abortController = new AbortController();
    const id = setTimeout(() => abortController.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: abortController.signal,
      mode:"no-cors",
      // referrerPolicy:"unsafe-url"
    });
    clearTimeout(id);
    return response;
  }

  const response = await fetchWithTimeout(url, fetchOptions, timeout);
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const json = await response.json();
    return json;
  } else {
    if (contentType && contentType.includes("charset=ISO-8859-1")) {
      const text = await response.arrayBuffer();
      return text;
    } else {
      const text = await response.text();
      return text;
    }
  }
};

export default fetchData;
