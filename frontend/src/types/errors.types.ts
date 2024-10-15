export type ErrorFieldFromServerType = {
  location: string;
  msg: string;
  type: string;
  path: string;
  value: string;
};

export type ErrorFieldFromServerReducedType = {
  message: string;
  type: string;
  field: string;
};
