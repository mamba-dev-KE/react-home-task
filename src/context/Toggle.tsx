import { ReactNode, createContext, useState } from 'react';

export const ToggleContext = createContext<{
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
}>({ isToggled: false, setIsToggled: () => {}, toggle: () => {} });

const ToggleContextProvider = ({ children }: { children: ReactNode }) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const toggle = () => setIsToggled(!isToggled);

  return (
    <ToggleContext.Provider value={{ isToggled, setIsToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
