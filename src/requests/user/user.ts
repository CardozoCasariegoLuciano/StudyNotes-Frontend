import axios, { AxiosError } from "axios";
import { manageAPIErrors } from "../../helpers/apiErrors";
import { UrlBank } from "../../helpers/URLs";
import {
  APISuccessUser,
  getUserReturnData,
} from "../../interfaces/API_user.interface";

export const getUser = async (token: string): getUserReturnData => {
  try {
    const axiosResp = await axios.get(UrlBank.user.getUser, {
      headers: {
        Authorization: token,
      },
    });
    const resp = axiosResp.data as APISuccessUser;
    return { user: resp.data };
  } catch (err) {
    const backError = manageAPIErrors(err as AxiosError);
    return { errorCode: backError.message_type };
  }
};
