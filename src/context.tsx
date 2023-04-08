import React from "react";

interface CurrentUserContextType {
  personalInfo: FormInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<FormInfo>>;
  personalFormSubmitted: boolean;
  setPersonalFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  planInfo: PlanInfo;
  setPlanInfo: React.Dispatch<React.SetStateAction<PlanInfo>>;
  wasPlanSelected: boolean;
  setWasPlanSelected: React.Dispatch<React.SetStateAction<boolean>>;
  showConfirmation: boolean;
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [personalInfo, setPersonalInfo] = React.useState<FormInfo>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [personalFormSubmitted, setPersonalFormSubmitted] =
    React.useState<boolean>(false);
  const [planInfo, setPlanInfo] = React.useState<PlanInfo>({
    planName: "",
    isYearly: false,
    addOns: [],
  });
  const [wasPlanSelected, setWasPlanSelected] = React.useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] =
    React.useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        personalInfo,
        setPersonalInfo,
        personalFormSubmitted,
        setPersonalFormSubmitted,
        planInfo,
        setPlanInfo,
        wasPlanSelected,
        setWasPlanSelected,
        showConfirmation,
        setShowConfirmation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
