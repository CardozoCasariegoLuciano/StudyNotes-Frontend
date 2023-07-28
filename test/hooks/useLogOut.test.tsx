import { renderHook } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../src/contexts/userContext";
import useAuth from "../../src/hooks/useAuth";

const wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  );
};

describe("LogOut test cases", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should navigate to /auth/login", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: wrapper });

    act(() => {
      result.current.logOut();
    });

    expect(window.location.pathname).toBe("/auth/login");
  });

  test("Should remove token from storage", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: wrapper });

    const localStorageSpy = jest.spyOn(
      window.localStorage.__proto__,
      "removeItem"
    );
    act(() => {
      result.current.logOut();
    });

    expect(localStorageSpy).toHaveBeenCalledWith("token");
  });
});
