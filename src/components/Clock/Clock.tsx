import { FC, useEffect, useRef, useState } from "react";
import { useSettings } from "../../context/SettingsContext";
import "./Clock.css";

interface ClockProps {
    category: "pomodoro" | "short-break" | "long-break";
}

const formatTime = (timeSec: number) => {
    const min = Math.floor(timeSec / 60);
    const sec = Math.floor(timeSec % 60);
    return `${min.toString().padStart(2, "0")}:${sec
        .toString()
        .padStart(2, "0")}`;
};

const calculateTime = (startTime?: number, now?: number) => {
    let elapsedSec = 0;
    if (startTime && now) elapsedSec = (now - startTime) / 1000;
    return elapsedSec;
};

const Clock: FC<ClockProps> = ({ category }) => {
    const [isPaused, setIsPaused] = useState(true);
    const [startTime, setStartTime] = useState<number>();
    const [now, setNow] = useState<number>();
    const intervalRef = useRef<number>();
    const clock = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        return clearInterval(intervalRef.current);
    }, []);

    const { settings } = useSettings();

    const handlePauseToggle = () => {
        if (isPaused) {
            // first time or is paused and will resume
            if (!startTime) setStartTime(Date.now());
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setNow(Date.now());
            }, 100);
        } else {
            // is not paused and will pause
            clearInterval(intervalRef.current);
        }

        setIsPaused((prev) => !prev);
    };

    const elapsedSec = calculateTime(startTime, now);
    const formatedTime = formatTime(elapsedSec);
    let progress = 0;

    if (category === "pomodoro") {
        progress = ((elapsedSec / 3) * 5) / settings.pomodoro;
    } else if (category === "short-break") {
        progress = ((elapsedSec / 3) * 5) / settings.shortBreak;
    } else if (category === "long-break") {
        progress = ((elapsedSec / 3) * 5) / settings.longBreak;
    }

    clock.current?.style.setProperty("--progress", `${progress}%`);

    // console.log("render");

    return (
        <div className="clock-container">
            <div className="clock-outter">
                <button
                    type="button"
                    className="clock-inner"
                    onClick={handlePauseToggle}
                    ref={clock}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "30px",
                        }}
                    >
                        <span className="total-time">
                            {category === "pomodoro" &&
                                `${settings.pomodoro} min`}
                            {category === "short-break" &&
                                `${settings.shortBreak} min`}
                            {category === "long-break" &&
                                `${settings.longBreak} min`}
                        </span>
                        {formatedTime}
                        <span className="pause">
                            {isPaused ? "PLAY" : "PAUSE"}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Clock;
