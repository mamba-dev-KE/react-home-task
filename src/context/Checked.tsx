import { ReactNode, createContext, useState } from 'react';

export const CheckedContext = createContext<{
  isCAO: boolean;
  setIsCAO: React.Dispatch<React.SetStateAction<boolean>>;
  isSFO: boolean;
  setIsSFO: React.Dispatch<React.SetStateAction<boolean>>;
  isEDF: boolean;
  setIsEDF: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isCAO: false,
  setIsCAO: () => {},
  isSFO: false,
  setIsSFO: () => {},
  isEDF: false,
  setIsEDF: () => {},
});

const CheckedContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCAO, setIsCAO] = useState<boolean>(false);
  const [isSFO, setIsSFO] = useState<boolean>(false);
  const [isEDF, setIsEDF] = useState<boolean>(false);

  return (
    <CheckedContext.Provider
      value={{ isCAO, setIsCAO, isSFO, setIsSFO, isEDF, setIsEDF }}
    >
      {children}
    </CheckedContext.Provider>
  );
};

export default CheckedContextProvider;
