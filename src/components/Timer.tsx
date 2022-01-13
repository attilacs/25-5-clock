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
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
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
