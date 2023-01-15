import React from "react";

interface ContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  children?: React.ReactNode;
}

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = React.useState<number>(1);

  return (
    <AppContext.Provider value={{ page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
