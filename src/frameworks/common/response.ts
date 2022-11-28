export const ResponseHandler = (
  status = true,
  error = null,
  content = null,
) => {
  return {
    status,
    error,
    content,
  };
};

export const ResponseError = (
  status: number,
  msg: string,
  reason: string,
  url?: string,
  ip?: string,
  validationErrors = [],
) => {
  return {
    status,
    url,
    msg,
    reason,
    ip,
    validationErrors,
  };
};

export const ValidationError = (status = 400, field: string, msg: string) => {
  return {
    status,
    field,
    msg,
  };
};
