import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { apiUrl, websiteUrl, env } = publicRuntimeConfig;

const getEnv = () => {
  return env;
};
const getApiUrl = () => {
  if (!apiUrl) {
    return;
  }
  return apiUrl;
};
const getWebsiteUrl = () => {
  if (!websiteUrl) {
    return;
  }
  return websiteUrl;
};

export { getEnv, getApiUrl, getWebsiteUrl };
