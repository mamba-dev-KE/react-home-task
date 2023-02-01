import { useContext } from "react";
import { ToggleContext } from "../context/Toggle";

export const useToggle = () => useContext(ToggleContext);
