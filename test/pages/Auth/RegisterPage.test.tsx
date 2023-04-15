import { fireEvent, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import React from "react";
import RegisterPage from "../../../src/pages/Auth/RegisterPage";
import { render } from "../../testHelpers/functions";

afterEach(() => {
  jest.resetAllMocks();
});

describe("RegisterPage test cases", () => {
  test("Must redirect to /auth/login when click on 'Have an acount' link", () => {
    render(<RegisterPage />, { route: "auth/register" });

    const haveAccountLink = screen.getByText(/have an account yet/i);
    fireEvent.click(haveAccountLink);
    expect(window.location.pathname).toBe("/auth/login");
  });

  test("Must redirect to /home when the form data is OK", async () => {
    const axiosPostSpy = jest.spyOn(axios, "post").mockResolvedValueOnce(null);

    render(<RegisterPage />, { route: "/auth/register" });

    const singInButton = screen.getByText(/sing in/i);
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passInput = screen.getByPlaceholderText(/password/i);
    const confirmPassInput = screen.getByPlaceholderText(/confirmation/i);

    fireEvent.change(nameInput, { target: { value: "TestName" } });
    fireEvent.change(emailInput, { target: { value: "valid@test.com" } });
    fireEvent.change(passInput, { target: { value: "123123" } });
    fireEvent.change(confirmPassInput, { target: { value: "123123" } });

    fireEvent.click(singInButton);

    await waitFor(() => expect(axiosPostSpy).toHaveBeenCalledTimes(1));
    expect(window.location.pathname).toBe("/home");
  });

  test("Must keep in the same route if the form is invalid", async () => {
    const axiosPostSpy = jest.spyOn(axios, "post").mockResolvedValueOnce(null);
    render(<RegisterPage />, { route: "/auth/register" });

    const singInButton = screen.getByText(/sing in/i);
    //Empty content on form inputs

    fireEvent.click(singInButton);
    expect(axiosPostSpy).toHaveBeenCalledTimes(0);
    expect(window.location.pathname).toBe("/auth/register");
  });
});
