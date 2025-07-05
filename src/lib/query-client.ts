import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount, error) => {
        if (
          error instanceof Error &&
          "status" in error &&
          typeof error.status === "number"
        ) {
          const status = error.status;
          if (status >= 400 && status < 500 && status !== 408) {
            return false;
          }
        }
        return failureCount < 2;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
    },
    mutations: {
      retry: 1,
    },
  },
});
