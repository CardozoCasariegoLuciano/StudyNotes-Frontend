import { AxiosError } from 'axios';
import { APIError } from '../interfaces/API_response.interface';

export const manageAPIErrors = (axiosError: AxiosError): APIError => {
  let result: APIError;
  switch (axiosError.code) {
  case 'ERR_NETWORK':
    result = {
      data: null,
      message_type: 'ERR_NETWORK',
      message: 'Connection error, try again later',
    };
    break;

    //Send error setted in the Backend
  case 'ERR_BAD_REQUEST':
    result = axiosError.response?.data as APIError;
    break;

  default:
    console.log('Error: ', axiosError);
    result = {
      data: null,
      message_type: 'ERROR',
      message: 'Something was wrong, try again later',
    };
    break;
  }

  return result;
};
