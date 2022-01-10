import {
  TimeLeftStyled,
  TimerLabelStyled,
  TimerStyled
} from "../styles/TimerStyled";

const Timer = () => {
  const displayClock = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <TimerStyled>
      <TimerLabelStyled id="timer-label">Session</TimerLabelStyled>
      <TimeLeftStyled id="time-left">25:00</TimeLeftStyled>
    </TimerStyled>
  );
};

export default Timer;
