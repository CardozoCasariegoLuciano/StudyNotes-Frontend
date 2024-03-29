/* eslint-disable no-magic-numbers */
import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import RegisterPage from '../../../src/pages/Auth/RegisterPage';
import { render } from '../../testHelpers/functions';

afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllTimers();
});

beforeEach(() => {
  jest.useFakeTimers();
});

describe('RegisterPage test cases', () => {
  test('Must redirect to /auth/login when click on \'Have an acount\' link', () => {
    render(<RegisterPage />, { route: 'auth/register' });

    const haveAccountLink = screen.getByText(/Already have an account/i);
    fireEvent.click(haveAccountLink);
    expect(window.location.pathname).toBe('/auth/login');
  });

  test('Must redirect to /home when the form data is OK', async () => {
    const axiosPostSpy = jest
      .spyOn(axios, 'post')
      .mockResolvedValueOnce({ data: { data: { token: 'anyToken' } } });

    render(<RegisterPage />, { route: '/auth/register' });

    const registerButton = screen.getByText(/sing up/i);
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passInput = screen.getByPlaceholderText(/password/i);
    const confirmPassInput = screen.getByPlaceholderText(/confirmation/i);

    fireEvent.change(nameInput, { target: { value: 'TestName' } });
    fireEvent.change(emailInput, { target: { value: 'valid@test.com' } });
    fireEvent.change(passInput, { target: { value: '123123' } });
    fireEvent.change(confirmPassInput, { target: { value: '123123' } });

    fireEvent.click(registerButton);

    await waitFor(() => expect(axiosPostSpy).toHaveBeenCalledTimes(1));
    expect(window.location.pathname).toBe('/');
  });

  test('Must keep in the same route if the form is invalid', () => {
    const axiosPostSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce(null);
    render(<RegisterPage />, { route: '/auth/register' });

    const registerButton = screen.getByText(/sing up/i);
    //Empty content on form inputs

    fireEvent.click(registerButton);
    expect(axiosPostSpy).toHaveBeenCalledTimes(0);
    expect(window.location.pathname).toBe('/auth/register');
  });

  test('Must show a message when the register fail', async () => {
    const axiosPostSpy = jest.spyOn(axios, 'post').mockRejectedValueOnce({
      code: 'ERR_BAD_REQUEST',
      response: {
        data: {
          data: {},
          message: 'TestError message',
          message_type: 'error',
        },
      },
    });

    render(<RegisterPage />, { route: 'auth/register' });

    const registerButton = screen.getByText(/sing up/i);
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passInput = screen.getByPlaceholderText(/password/i);
    const confirmPassInput = screen.getByPlaceholderText(/confirmation/i);

    fireEvent.change(nameInput, { target: { value: 'TestName' } });
    fireEvent.change(emailInput, { target: { value: 'valid@test.com' } });
    fireEvent.change(passInput, { target: { value: '123123' } });
    fireEvent.change(confirmPassInput, { target: { value: '123123' } });

    expect(screen.queryByText('TestError message')).toBeNull();

    act(() => {
      fireEvent.click(registerButton);
    });

    await waitFor(() => expect(axiosPostSpy).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(screen.queryByText('TestError message')).toBeTruthy(),
    );

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.queryByText('TestError message')).toBeFalsy();
  });
});
