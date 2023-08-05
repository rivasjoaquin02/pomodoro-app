import { useCallback, useReducer } from "react";

const INITIAL = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    font: "Roboto",
    color: "theme1",
};

type Action =
    | {
          type: "POMODORO" | "SHORT_BREAK" | "LONG_BREAK";
          payload: number;
      }
    | {
          type: "FONT" | "COLOR";
          payload: string;
      };

const reducer = (state: typeof INITIAL, action: Action) => {
    switch (action.type) {
        case "POMODORO":
            return { ...state, pomodoro: action.payload };
        case "SHORT_BREAK":
            return { ...state, shortBreak: action.payload };
        case "LONG_BREAK":
            return { ...state, longBreak: action.payload };
        case "FONT":
            return { ...state, font: action.payload };
        case "COLOR":
            return { ...state, color: action.payload };
        default:
            return state;
    }
};

const useSettingsHook = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL);

    const setPomodoro = useCallback((value: number) => {
        dispatch({ type: "POMODORO", payload: value });
    }, []);

    const setShortBreak = useCallback((value: number) => {
        dispatch({ type: "SHORT_BREAK", payload: value });
    }, []);

    const setLongBreak = useCallback((value: number) => {
        dispatch({ type: "LONG_BREAK", payload: value });
    }, []);

    const setFont = useCallback((value: string) => {
        dispatch({ type: "FONT", payload: value });
    }, []);

    const setColor = useCallback((value: string) => {
        dispatch({ type: "COLOR", payload: value });
    }, []);

    return {
        settings: state,
        setPomodoro,
        setShortBreak,
        setLongBreak,
        setFont,
        setColor,
    };
};

export default useSettingsHook;
