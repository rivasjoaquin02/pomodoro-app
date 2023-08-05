import { FC, useState } from "react";
import "./NavBar.css";
import { Category } from "../../App";

interface NavBarProps {
    selectCategory: (category: Category) => void;
}

const NavBar: FC<NavBarProps> = ({ selectCategory }) => {
    const [btnPressed, setBtnPressed] = useState<Category>("pomodoro");

    const handlePress = (category: Category) => {
        setBtnPressed(category);
        selectCategory(category);
    };

    return (
        <nav className="navbar">
            <button
                type="button"
                className={`btn-navbar ${
                    btnPressed === "pomodoro" ? "btn-navbar-active" : ""
                }`}
                onClick={() => handlePress("pomodoro")}
            >
                pomodoro
            </button>
            <button
                type="button"
                className={`btn-navbar ${
                    btnPressed === "short-break" ? "btn-navbar-active" : ""
                }`}
                onClick={() => handlePress("short-break")}
            >
                short break
            </button>
            <button
                type="button"
                className={`btn-navbar ${
                    btnPressed === "long-break" ? "btn-navbar-active" : ""
                }`}
                onClick={() => handlePress("long-break")}
            >
                long break
            </button>
        </nav>
    );
};

export default NavBar;
