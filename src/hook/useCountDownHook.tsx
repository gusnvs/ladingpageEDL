// useCountDownHook.js
import { useState, useEffect } from "react";

const useCountDownHook = (date) => {
    const [countdown, setCountdown] = useState({
        day: undefined,
        hour: undefined,
        minute: undefined,
        second: undefined,
    });

    const countDownCalc = () => {
        const countDate = new Date(date).getTime();
        const now = new Date().getTime();
        const interval = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day);
        const dayHour = Math.floor((interval % day) / hour);
        const dayMinute = Math.floor((interval % hour) / minute);
        const daySecond = Math.floor((interval % minute) / second);

        setCountdown({
            day: dayNumber,
            hour: dayHour,
            minute: dayMinute,
            second: daySecond,
        });
    };

    useEffect(() => {
        const intervalId = setInterval(countDownCalc, 1000);
        return () => clearInterval(intervalId);

    }, []);

    return [countdown.day, countdown.hour, countdown.minute, countdown.second];
};

export default useCountDownHook;
