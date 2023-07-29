import {
  act,
  renderHook,
  RenderHookResult,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from '../../src/contexts/userContext';
import useUser from '../../src/hooks/useUser';
import {
  UserContextValues,
  UserProviderData,
} from '../../src/interfaces/userContext.interface';
import { getUser } from '../../src/requests/user/user';
import { Roles } from '../../src/helpers/roles.enum';

const wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <UserProvider>{children}</UserProvider>;
    </BrowserRouter>
  );
};

jest.mock('../../src/requests/user/user.ts', () => ({
  getUser: jest.fn(),
}));

describe('Test useUser', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('When have no valid token', () => {
    test('Should get the empty context data and redirect', async () => {
      const errorCode = 'UnERRORCODE';
      localStorage.setItem('token', 'asd');
      (getUser as jest.Mock).mockReturnValue({
        errorCode: errorCode,
      });

      await waitFor(() => {
        const { result } = renderHook(() => useUser(), {
          wrapper: wrapper,
        });

        expect(result.current.isLoggued).toBeFalsy();
        expect(result.current.user).toBe(null);
      });
      expect(getUser).toHaveBeenCalled();
      expect(window.location.pathname).toBe('/error');
      expect(window.location.href).toContain(errorCode);
    });
  });

  describe('When have not token', () => {
    test('Should get the empty context data', async () => {
      await waitFor(() => {
        const { result } = renderHook(() => useUser(), { wrapper: wrapper });

        expect(result.current.isLoggued).toBeFalsy();
        expect(result.current.user).toBe(null);
      });
    });
  });

  describe('When have a valid token', () => {
    const validToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicm9sZSI6IlVTRVIifQ.Cad698ZfmWUuOgrkckrpgvKb2W-Drz1ntXlOEx0el98';
    const user: UserContextValues = {
      name: 'Test',
      email: 'Test',
      id: 12,
      role: Roles.USER,
      image: 'IMAGE',
    };

    test('Should get the userData', async () => {
      localStorage.setItem('token', validToken);
      (getUser as jest.Mock).mockReturnValue({
        user: user,
      });

      let renderData!: RenderHookResult<UserProviderData, unknown>;
      await waitFor(() => {
        renderData = renderHook(() => useUser(), { wrapper: wrapper });
      });

      const { result } = renderData;
      expect(result.current.isLoggued).toBeTruthy();
      expect(result.current.user).toBe(user);
    });

    test('Should logout and clear data', async () => {
      localStorage.setItem('token', validToken);
      (getUser as jest.Mock).mockReturnValue({
        user: user,
      });

      let renderData!: RenderHookResult<UserProviderData, unknown>;
      await waitFor(() => {
        renderData = renderHook(() => useUser(), { wrapper: wrapper });
      });

      const { result } = renderData;
      expect(result.current.isLoggued).toBeTruthy();
      expect(result.current.user).toBe(user);

      act(() => {
        result.current.logOut();
      });

      expect(result.current.isLoggued).toBeFalsy();
      expect(result.current.user).toBe(null);
    });
  });
});
