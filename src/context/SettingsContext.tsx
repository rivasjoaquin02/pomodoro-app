import { ReactNode, createContext, useContext } from "react";
import useSettingsHook from "../hooks/useSettingsHook";

const SettingsContext = createContext<ReturnType<typeof useSettingsHook>>(
    {} as unknown as ReturnType<typeof useSettingsHook>
);

export const useSettings = () => {
    const settings = useContext(SettingsContext);

    if (!settings)
        throw new Error("You can only use useSettings inside SettingsProvider");

    return settings;
};

const SettingsProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SettingsContext.Provider value={useSettingsHook()}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
