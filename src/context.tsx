import React from "react";

interface CurrentUserContextType {
  formInfo: FormInfo;
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  planInfo: PlanInfo;
  setPlanInfo: React.Dispatch<React.SetStateAction<PlanInfo>>;
}

interface Props {
  children: React.ReactNode;
}

export interface PlanInfo {
  planName: string;
  isYearly: boolean;
  addOns: string[];
}

interface FormInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

const AppContext = React.createContext<CurrentUserContextType | null>(null);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = React.useState<number>(1);
  const [formInfo, setFormInfo] = React.useState<FormInfo>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [planInfo, setPlanInfo] = React.useState<PlanInfo>({
    planName: "",
    isYearly: false,
    addOns: [],
  });

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        formInfo,
        setFormInfo,
        planInfo,
        setPlanInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
