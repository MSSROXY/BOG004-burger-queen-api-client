import { useState, useEffect } from "react";
import temporizador from "../../img/temporizador.png"

export const OrderCurrentTime = ({ order }) => {
  const timeEntryMS = Date.parse(order.dateEntry);
  const currentTime = Date.parse(new Date());
  const totalTimeMS = currentTime - timeEntryMS;
  const actualTime = Math.trunc(totalTimeMS / 1000);

  let myHour = Math.floor(actualTime / 3600);

  let myMinutes = Math.floor((actualTime / 60) % 60);

  let mySeconds = actualTime % 60;

  let [hour, setHour] = useState(myHour);
  let [minute, setMinute] = useState(myMinutes);
  let [second, setSecond] = useState(mySeconds);
  let timer;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinute(minute + 1);
        setSecond(0);
      }
      if (minute === 59) {
        setHour(hour + 1);
        setMinute(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="timer">
      <img src={temporizador} alt="temporizador"/>
      {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute} : {second < 10 ? "0" + second : second}
    </div>
  );
};
