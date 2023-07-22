export type UserContextValues = {
  name: string;
  id: number;
  email: string;
  role: string;
  image: string;
};

export type UserProviderData = {
  isLoggued: boolean;
  user: UserContextValues | null;
  logOut: () => void;
};
