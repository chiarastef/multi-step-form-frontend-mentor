import React from "react";

interface ContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children?: React.ReactNode;
}

const AppContext = React.createContext<ContextType | null>(null);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = React.useState<number>(3);
  const [isYearly, setIsYearly] = React.useState<boolean>(false);

  return (
    <AppContext.Provider value={{ page, setPage, isYearly, setIsYearly }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
