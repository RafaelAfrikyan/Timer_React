import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [second, setSecond] = useState(0);
  const [tenSecond, setTenSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [tenMinute, setTenMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [tenHour, setTenHour] = useState(0);
  const [timer, setTimer] = useState();

  const startTimer = () => {
    setTimer(
      setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000)
    );
  };
  useEffect(() => {
    if (second > 9) {
      setSecond(0);
      setTenSecond((n) => n + 1);
    }
    if (tenSecond === 6) {
      setTenSecond(0);
      setMinute((n) => n + 1);
    }
    if (minute > 9) {
      setMinute(0);
      setTenMinute((n) => n + 1);
    }
    if (tenMinute === 6) {
      setTenMinute(0);
      setHour((n) => n + 1);
    }
    if (hour === 9) {
      setTenHour((n) => n + 1);
      setHour(0);
    }
  }, [second, tenSecond, minute, tenMinute, hour, tenHour]);

  const pause = () => {
    return clearInterval(timer);
  };

  const reset = () => {
    clearInterval(timer);
    setSecond(0);
    setMinute(0);
    setHour(0);
    setTenSecond(0);
    setTenMinute(0);
    setTenHour(0);
  };

  return (
    <div className="wrap">
      <div className="times">
        <div className="hour">
          {tenHour}
          {hour}
        </div>
        <div className="minute">
          {tenMinute}
          {minute}
        </div>
        <div className="second">
          {tenSecond}
          {second}
        </div>
      </div>

      <div className="buttons">
        <button type="button" className="start" onClick={startTimer}>
          Start
        </button>

        <button type="button" className="pause" onClick={pause}>
          Pause
        </button>
        <button type="button" className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default Timer;
