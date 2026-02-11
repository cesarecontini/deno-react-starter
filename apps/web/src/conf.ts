const getApiUrlByDomain = () => {
  const protocol = window.location.protocol;
  const origin = window.location.origin;

  if (protocol === "http:") {
    return import.meta.env.VITE_API_URL;
  }

  if (origin.includes("--test")) {
    return import.meta.env.VITE_API_URL_TEST;
  }

  if (origin.includes("--main")) {
    return import.meta.env.VITE_API_URL_PROD;
  }

  if (origin === import.meta.env.VITE_API_URL_PROD) {
    return import.meta.env.VITE_API_URL_PROD;
  }

  throw new Error("Invalid API URL");
};

export const conf = {
  API_URL: getApiUrlByDomain(),
};
