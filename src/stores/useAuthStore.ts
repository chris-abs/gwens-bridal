import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,

      login: async (username: string, password: string) => {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const { token } = await response.json();
        set({ token, isAuthenticated: true });
      },

      logout: () => set({ token: null, isAuthenticated: false }),
    }),
    { name: "auth" }
  )
);
