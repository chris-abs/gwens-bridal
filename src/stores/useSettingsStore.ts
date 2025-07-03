import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface SettingsState {
  theme: Theme;
  applyTheme: (newTheme: Theme) => void;
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyThemeToDOM = (theme: Theme) => {
  const root = document.documentElement;
  const systemTheme = darkModeQuery.matches ? "dark" : "light";
  const effectiveTheme = theme === "system" ? systemTheme : theme;

  root.classList.remove("light", "dark");
  root.classList.add(effectiveTheme);
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "system",
      applyTheme: (newTheme) => {
        set({ theme: newTheme });
        applyThemeToDOM(newTheme);
      },
    }),
    {
      name: "profile-settings",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDOM(state.theme);
        }
      },
    }
  )
);
