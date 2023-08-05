import { FC, ReactNode } from "react";
import "./Settings.css";

interface PropertySettingsProps {
    children: ReactNode;
}

const PropertySettings: FC<PropertySettingsProps> = ({ children }) => {
    return <div className="settings-properties">{children}</div>;
};

export default PropertySettings;
