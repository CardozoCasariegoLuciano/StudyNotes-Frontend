import { UserContextValues } from './userContext.interface';

export interface APISuccessUser {
  data: UserContextValues;
  message: string;
  message_type: string;
}

export type getUserReturnData = Promise<{ user?: UserContextValues; errorCode?: string }>;
