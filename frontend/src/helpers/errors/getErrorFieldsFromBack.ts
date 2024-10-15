import { ErrorFieldFromServerType } from 'src/types/errors.types';
import { reducedErrors } from './reduceErrors';

export const getErrorFieldsFromBack = (errors: ErrorFieldFromServerType[]) => {
  return reducedErrors(errors);
};
