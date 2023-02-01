import { ReactNode, createContext, useContext, useState } from 'react';

const ToggleContext = createContext<{
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isToggled: false, setIsToggled: () => {} });

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
