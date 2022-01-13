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
  const displayClock = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

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
