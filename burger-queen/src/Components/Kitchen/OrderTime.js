export const OrderTime = ({ order }) => {
  const timeEntry = Date.parse(order.dateEntry);
  const timeFinished = Date.parse(order.dateProcessed);
  const totalTimeMS = timeFinished - timeEntry;
  const totalTime = Math.trunc(totalTimeMS/1000);


  let hour = Math.floor(totalTime / 3600);
  hour = hour < 10 ? "0" + hour : hour;

  let minute = Math.floor((totalTime / 60) % 60);
  minute = minute < 10 ? "0" + minute : minute;

  let seconds = totalTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds

  return <>{hour} : {minute} : {seconds}</>;
};
