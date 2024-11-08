/** @type {import('next').NextConfig} */

const getEnvConfig = () => {
  switch (process.env.ENV) {
    case "dev":
      return {
        env: "dev",
        apiUrl: "https://webhook.site/b450fdb5-3b8a-4c1f-b5d6-ff44af552952",
        websiteUrl: "http://localhost:3000",
      };
    case "stage":
      return {
        env: "stage",
        apiUrl: "https://webhook.site/b450fdb5-3b8a-4c1f-b5d6-ff44af552952",
        websiteUrl: "https://segments-stage.com/api",
      };
    case "prod":
      return {
        env: "prod",
        apiUrl: "https://webhook.site/b450fdb5-3b8a-4c1f-b5d6-ff44af552952",
        websiteUrl: "https://segments.com/api",
      };
  }
};
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  publicRuntimeConfig: getEnvConfig(),
};

module.exports = nextConfig;
