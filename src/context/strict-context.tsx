import { createContext, useContext as RUseContext } from "react";

export function createStrictContext<T>(
  options: {
    errorMessage?: string;
    name?: string;
  } = {},
) {
  const Context = createContext<T | undefined>(undefined);
  Context.displayName = options.name;

  function useContext() {
    const context = RUseContext(Context);
    if (context === undefined) {
      throw new Error(
        options.errorMessage ||
          `${options.name || ""} Context Provider is missing`,
      );
    }
    return context;
  }

  return [Context.Provider, useContext] as [React.Provider<T>, () => T];
}
