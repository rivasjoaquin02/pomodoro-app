import { ReactNode } from "react";
import "./Picker.css";

type ThemeProps = {
    variant: "theme";
    theme: string;
};

type FontProps = {
    variant: "font";
    font: string;
};

type Props = { handleClick: () => void; children?: ReactNode } & (
    | ThemeProps
    | FontProps
);

export const Picker = ({ children }: { children: ReactNode }) => {
    return <div className="picker">{children}</div>;
};

export const PickerItem = (props: Props) => {
    if (props.variant === "theme")
        return (
            <button
                type="button"
                className={`picker-item ${
                    props.variant ? `${props.theme}` : ""
                }`}
            >
                {props.children}
            </button>
        );

    if (props.variant === "font")
        return (
            <button
                type="button"
                className="picker-font picker-item"
                style={{ fontFamily: props.font }}
            >
                {props.children}
            </button>
        );
};
