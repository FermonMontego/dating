import {
  ErrorFieldFromServerReducedType,
  ErrorFieldFromServerType,
} from 'src/types/errors.types';

export const reducedErrors = (errors: ErrorFieldFromServerType[]) => {
  return errors.reduce<ErrorFieldFromServerReducedType[]>((acc, error) => {
    acc.push(formatError(error));

    return acc;
  }, []);
};

const formatError = (
  error: ErrorFieldFromServerType,
): ErrorFieldFromServerReducedType => {
  return {
    message: error.msg,
    field: error.path,
    type: error.type,
  };
};
