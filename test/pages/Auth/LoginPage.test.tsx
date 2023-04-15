import { render } from "../../testHelpers/functions";
import LoginPage from "../../../src/pages/Auth/LoginPage";
import React from "react";
import { fireEvent, screen } from "@testing-library/react";

describe("LoginPage test cases", () => {
  test("must render somethig", () => {
    const page = render(<LoginPage />, { route: "auth/login" });
    expect(page).not.toBeFalsy()
  });

  test("Must redirect to RegisterPage wheh click on `don't have an acount yet`", () => {
    render(<LoginPage />, { route: "auth/login" });

    const dontHaveAccountLink = screen.getByText(/don't have an account yet/i);
    fireEvent.click(dontHaveAccountLink);
    expect(window.location.pathname).toBe("/auth/register");
  });

  //test("Must keep in the same route if the form is invalid", async () => {
    ////const axiosPostSpy = jest.spyOn(axios, "post").mockResolvedValueOnce(null);
    //render(<LoginPage />, { route: "auth/login" });

    //const loginButton = screen.getByText(/login/i);
    ////Empty content on form inputs

    //fireEvent.click(loginButton);
    ////expect(axiosPostSpy).toHaveBeenCalledTimes(0);
    //expect(window.location.pathname).toBe("/auth/login");
  //});
});
