//simpler way to create a context and use it in the components

import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: 'light', //just to show the type of the context
    lightTheme: () => {},
    darkTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;


//using this so that every component can directly use the theme context
export default function useTheme() {
    return useContext(ThemeContext);
}
