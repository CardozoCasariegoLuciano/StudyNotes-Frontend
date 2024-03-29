import { renderHook } from '@testing-library/react';
import axios, { AxiosError } from 'axios';
import { MemoryRouter } from 'react-router-dom';
import useAuth from '../../src/hooks/useAuth';
import { RegisterFormData } from '../../src/interfaces/API_auth.interface';
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

describe('useRegister Test cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return null if register was OK', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: MemoryRouter });
    (axios.post as jest.Mock).mockResolvedValueOnce(goodResponse);

    const registerData: RegisterFormData = {
      name: 'test',
      email: 'a@a.com',
      password: '123123',
      confirmation: '123123',
    };

    const registerResult = await result.current.register(registerData);
    expect(registerResult).toBeNull();
  });

  test('Should save on storage user name, email and token', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: MemoryRouter });
    (axios.post as jest.Mock).mockResolvedValueOnce(goodResponse);
    const localStorageSpy = jest.spyOn(
      window.localStorage.__proto__,
      'setItem',
    );

    const registerData: RegisterFormData = {
      name: 'test',
      email: 'a@a.com',
      password: '123123',
      confirmation: '123123',
    };

    await result.current.register(registerData);

    expect(localStorageSpy).toHaveBeenCalledWith('token', token);
  });

  test('Should return an error if register was Wrong', async () => {
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

    const registerResutl = await result.current.register(
      {} as RegisterFormData,
    );
    expect(registerResutl).toEqual(error);
  });
});
