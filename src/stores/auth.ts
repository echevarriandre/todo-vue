import { User } from "@/@types";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: undefined as User | undefined,
    token: undefined as string | undefined,
  }),
  getters: {
    isAuthenticated: (state): boolean => state.token != undefined && state.user != undefined,
  },
  actions: {
    async login(username: string, password: string): Promise<boolean> {
      //TODO: axios login user
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (username !== "andre" || password !== "andre") {
        return false;
      }

      const user: User = {
        stamp: "this_is_stamp",
        username: username,
      };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", "this_is_token");
      this.user = user;
      this.token = "this_is_token";
      return true;
    },
    logout(): void {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.user = undefined;
      this.token = undefined;
    },
  },
});
