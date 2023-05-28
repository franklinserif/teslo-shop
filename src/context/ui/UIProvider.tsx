import { FC, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export interface UIState {
  isMenuOpen: boolean;
}

interface Props {
  children: React.ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
};

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: "UI - toggle menu" });
  };

  return (
    <UIContext.Provider value={{ ...state, toggleSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
