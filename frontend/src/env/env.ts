type T_ENV = {
  base_dev_url: string;
  production_api_uri: string;
};

export const env: T_ENV = {
  base_dev_url: 'http://localhost:8081/api',
  production_api_uri: `${window.location.origin}/api`,
};
