import { renderHook } from '@testing-library/react';
import axios, { AxiosError } from 'axios';
import { MemoryRouter } from 'react-router-dom';
import useAuth from '../../src/hooks/useAuth';
import { LoginFormData } from '../../src/interfaces/API_auth.interface';
import { APIError } from '../../src/interfaces/API_response.interface';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

const token = 'token';
const goodResponse = {
  data: {
    data: {
      token: token,
    },
    message: 'string',
    message_type: 'string',
  },
};

describe('useLogin Test cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return null if login was OK', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: MemoryRouter });
    (axios.post as jest.Mock).mockResolvedValueOnce(goodResponse);

    const loginData: LoginFormData = {
      email: 'a@a.com',
      password: '123123',
      remember: true,
    };

    const loginResult = await result.current.login(loginData);
    expect(loginResult).toBeNull();
  });

  test('Should save on storage the token', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: MemoryRouter });
    (axios.post as jest.Mock).mockResolvedValueOnce(goodResponse);
    const localStorageSpy = jest.spyOn(
      window.localStorage.__proto__,
      'setItem',
    );

    const loginData: LoginFormData = {
      email: 'a@a.com',
      password: '123123',
      remember: true,
    };

    await result.current.login(loginData);

    expect(localStorageSpy).toHaveBeenCalledWith('token', token);
  });

  test('Should return an error if login was Wrong', async () => {
    const error: APIError = {
      message: 'Error',
      data: null,
      message_type: 'Algo malio sal',
    };
    const axiosError: AxiosError = {
      code: 'ERR_BAD_REQUEST',
      response: { data: error },
    } as AxiosError;

    const { result } = renderHook(() => useAuth(), { wrapper: MemoryRouter });
    (axios.post as jest.Mock).mockRejectedValueOnce(axiosError);

    const loginResult = await result.current.login({} as LoginFormData);
    expect(loginResult).toEqual(error);
  });
});
