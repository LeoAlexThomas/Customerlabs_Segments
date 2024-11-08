import { getApiUrl } from "@/env";
const axios = require("axios");

const api = (route: string, options?: any, baseUrl?: string) => {
  const combinedOptions = Object.assign({}, options);

  const headers: any = {
    ...(combinedOptions.headers || {}),
    "content-type": "application/json",
  };

  const apiBaseUrl = baseUrl ?? getApiUrl();
  return axios({
    url: apiBaseUrl + route,
    ...combinedOptions,
    headers,
    transformResponse: (res: any, headers: Record<string, string>) => {
      if (!Boolean(res)) {
        return null;
      }
      if (headers["content-type"].startsWith("application/json")) {
        try {
          return JSON.parse(res);
        } catch (error) {
          return res;
        }
      }
      return res;
    },
  }).then((res: any) => {
    return res.data;
  });
};
export default api;
