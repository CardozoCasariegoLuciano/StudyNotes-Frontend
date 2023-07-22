import { renderHook } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { UserProvider } from "../../src/contexts/userContext";
import { Roles } from "../../src/helpers/roles.enum";
import useUser from "../../src/hooks/useUser";

const wrapper = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

//Refactorizar cuando el back ya traiga la data real
describe("Test useUser", () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe("When have any token", () => {
    test("Should get the context data", async () => {
      localStorage.setItem("token", "asd");
      const { result } = renderHook(() => useUser(), { wrapper: wrapper });

      expect(result.current.isLoggued).toBeTruthy();
      expect(result.current.user?.name).toBe("Fulanito");
      expect(result.current.user?.role).toBe(Roles.ADMIN);
      expect(result.current.user?.id).toBe(1);
    });

    test("Should logout and clear data", async () => {
      localStorage.setItem("token", "asd");
      const { result } = renderHook(() => useUser(), { wrapper: wrapper });

      act(() => {
        result.current.logOut();
      });

      expect(result.current.isLoggued).toBeFalsy();
      expect(result.current.user).toBe(null);
    });
  });

  describe("When have not any token", () => {
    test("Should get the empty context data", async () => {
      const { result } = renderHook(() => useUser(), { wrapper: wrapper });

      expect(result.current.isLoggued).toBeFalsy();
      expect(result.current.user).toBe(null);
    });
  });
});
