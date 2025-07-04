import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Theme = "light" | "dark";

interface SettingsState {
  theme: Theme;
  toggleTheme: () => void;
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const getInitialTheme = (): Theme => {
  return darkModeQuery.matches ? "dark" : "light";
};

const applyThemeToDOM = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      theme: getInitialTheme(),
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        set({ theme: newTheme });
        applyThemeToDOM(newTheme);
      },
    }),
    {
      name: "gwen-bridal-settings",
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
