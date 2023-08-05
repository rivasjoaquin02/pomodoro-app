import { useState } from "react";
import Clock from "./components/Clock/Clock";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./components/Settings/Settings";
import SettingsProvider from "./context/SettingsContext";
import { SettingsIcon } from "lucide-react";

export type Category = "pomodoro" | "short-break" | "long-break";

function App() {
    const [settings, setSettings] = useState(false);
    const [category, setCategory] = useState<Category>("pomodoro");

    return (
        <main className="app">
            <h1>pomodoro</h1>
            <NavBar selectCategory={setCategory} />
            <SettingsProvider>
                {settings && (
                    <Settings closeSettings={() => setSettings(false)} />
                )}
                <Clock category={category} />
            </SettingsProvider>
            <button
                onClick={() => setSettings(!settings)}
                className="btn-settings"
                type="button"
            >
                <SettingsIcon />
            </button>
        </main>
    );
}

export default App;
