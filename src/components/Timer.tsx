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
  return (
    <TimerStyled>
      <TimerLabelStyled id="timer-label">
        {mode === "session" ? "Session" : "Break"}
      </TimerLabelStyled>
      <TimeLeftStyled id="time-left">
        {displayClock(secondsLeft)}
      </TimeLeftStyled>
    </TimerStyled>
  );
};

export default Timer;
