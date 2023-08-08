import { FC } from "react";
import "./Settings.css";

import { XIcon } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import PropertySettings from "./PropertySettings";
import { Picker, PickerItem } from "./Picker";

interface SettingsProps {
    closeSettings: () => void;
}

const Settings: FC<SettingsProps> = ({ closeSettings }) => {
    const {
        settings,
        setPomodoro,
        setShortBreak,
        setLongBreak,
        setFont,
        setColor,
    } = useSettings();

    const handleApply = () => {
        closeSettings();
    };

    return (
        <div className="settings">
            <div className="settings__titlebar">
                <h1>Settings</h1>
                <button
                    type="button"
                    onClick={closeSettings}
                    className="btn-close"
                >
                    <XIcon />
                </button>
            </div>
            <hr />
            <div className="settings__properties">
                <div className="settings__properties-time-container">
                    <h3>TIME (MINUTES)</h3>
                    <div className="settings__properties-time">
                        <div className="pomodoro">
                            <label htmlFor="pomodoro">pomodoro</label>
                            <input
                                id="pomodoro"
                                type="number"
                                value={settings.pomodoro}
                                onChange={(e) =>
                                    setPomodoro(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="short-break">
                            <label htmlFor="short-break">short break</label>
                            <input
                                id="short-break"
                                type="number"
                                value={settings.shortBreak}
                                onChange={(e) =>
                                    setShortBreak(Number(e.target.value))
                                }
                            />
                        </div>
                        <div className="long-break">
                            <label htmlFor="long-break">long break</label>
                            <input
                                id="long-break"
                                type="number"
                                value={settings.longBreak}
                                onChange={(e) =>
                                    setLongBreak(Number(e.target.value))
                                }
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <PropertySettings>
                    <h3>FONT</h3>
                    <Picker>
                        <PickerItem
                            variant="font"
                            font="Arial"
                            handleClick={() => setFont("font1")}
                        >
                            Aa
                        </PickerItem>
                        <PickerItem
                            variant="font"
                            font="Verdana"
                            handleClick={() => setFont("font2")}
                        >
                            Aa
                        </PickerItem>
                        <PickerItem
                            variant="font"
                            font="Times New Roman"
                            handleClick={() => setFont("font3")}
                        >
                            Aa
                        </PickerItem>
                    </Picker>
                </PropertySettings>

                <hr />

                <PropertySettings>
                    <h3>COLOR</h3>
                    <Picker>
                        <PickerItem
                            variant="theme"
                            theme="theme1"
                            handleClick={() => setColor("theme1")}
                        ></PickerItem>
                        <PickerItem
                            variant="theme"
                            theme="theme2"
                            handleClick={() => setColor("theme2")}
                        ></PickerItem>
                        <PickerItem
                            variant="theme"
                            theme="theme3"
                            handleClick={() => setColor("theme3")}
                        ></PickerItem>
                    </Picker>
                </PropertySettings>
            </div>
            <button type="button" className="btn-apply" onClick={handleApply}>
                Apply
            </button>
        </div>
    );
};

export default Settings;
