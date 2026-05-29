import { createContext, useContext, useState, type ReactNode } from "react";

type LoadingContextValue = {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  const value: LoadingContextValue = {
    isLoading,
    showLoading: () => setIsLoading(true),
    hideLoading: () => setIsLoading(false),
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading は LoadingProvider の内側で使用してください");
  }
  return context;
}
