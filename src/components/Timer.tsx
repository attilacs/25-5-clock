import {
  TimeLeftStyled,
  TimerLabelStyled,
  TimerStyled
} from "../styles/TimerStyled";

interface TimerProps {
  secondsLeft: number;
  mode: string;
}

const Timer = ({ secondsLeft, mode }: TimerProps) => {
  const label = mode === "session" ? "Session" : "Break";

  return (
    <TimerStyled>
      <TimerLabelStyled id="timer-label">{label}</TimerLabelStyled>
      <TimeLeftStyled id="time-left">
        {displayClock(secondsLeft)}
      </TimeLeftStyled>
    </TimerStyled>
  );
};

export default Timer;
