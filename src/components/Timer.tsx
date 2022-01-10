import {
  TimeLeftStyled,
  TimerLabelStyled,
  TimerStyled
} from "../styles/TimerStyled";

const Timer = () => {
  return (
    <TimerStyled>
      <TimerLabelStyled id="timer-label">Session</TimerLabelStyled>
      <TimeLeftStyled id="time-left">25:00</TimeLeftStyled>
    </TimerStyled>
  );
};

export default Timer;
