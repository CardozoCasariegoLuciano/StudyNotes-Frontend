import { render } from "../../testHelpers/functions";
import LoginPage from "../../../src/pages/Auth/LoginPage";
import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";

afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllTimers();
});

beforeEach(() => {
  jest.useFakeTimers();
});

describe("LoginPage test cases", () => {
  test("Must redirect to RegisterPage wheh click on `don't have an acount yet`", () => {
    render(<LoginPage />, { route: "auth/login" });

    const dontHaveAccountLink = screen.getByText(/don't have an account yet/i);
    fireEvent.click(dontHaveAccountLink);
    expect(window.location.pathname).toBe("/auth/register");
  });

  test("Must keep in the same route if the form is invalid", async () => {
    const axiosPostSpy = jest.spyOn(axios, "post").mockResolvedValueOnce(null);
    render(<LoginPage />, { route: "/auth/login" });

    const loginButton = screen.getByText(/sing in/i);
    //Empty content on form inputs

    fireEvent.click(loginButton);
    expect(axiosPostSpy).toHaveBeenCalledTimes(0);
    expect(window.location.pathname).toBe("/auth/login");
  });

  test("Must redirect to /home when the form data is OK", async () => {
    const axiosPostSpy = jest.spyOn(axios, "post").mockResolvedValueOnce({
      data: {
        data: {
          userName: "test",
          token: "test",
          email: "test",
        },
      },
    });
    render(<LoginPage />, { route: "auth/login" });

    const loginButton = screen.getByText(/sing in/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInput, { target: { value: "valid@test.com" } });
    fireEvent.change(passInput, { target: { value: "123123" } });

    fireEvent.click(loginButton);

    await waitFor(() => expect(axiosPostSpy).toHaveBeenCalledTimes(1));
    expect(window.location.pathname).toBe("/home");
  });

  test("Must show a message when the login fail", async () => {
    const axiosPostSpy = jest.spyOn(axios, "post").mockRejectedValueOnce({
      code: "ERR_BAD_REQUEST",
      response: {
        data: {
          data: {},
          message: "TestError message",
          message_type: "error",
        },
      },
    });

    render(<LoginPage />, { route: "auth/login" });

    const loginButton = screen.getByText(/sing in/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passInput = screen.getByPlaceholderText(/password/i);

    fireEvent.change(emailInput, { target: { value: "valid@test.com" } });
    fireEvent.change(passInput, { target: { value: "123123" } });

    expect(screen.queryByText("TestError message")).toBeNull();

    act(() => {
      fireEvent.click(loginButton);
    });

    await waitFor(() => expect(axiosPostSpy).toHaveBeenCalledTimes(1));
    await waitFor(() =>
      expect(screen.queryByText("TestError message")).toBeTruthy()
    );

    act(() => {
      jest.advanceTimersByTime(8000);
    });

    expect(screen.queryByText("TestError message")).toBeFalsy();
  });
});
