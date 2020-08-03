import {createContext} from "react";

export const appContextDefaultValue = {
  danceSong: null,
};
export const AppContext = createContext(appContextDefaultValue);
