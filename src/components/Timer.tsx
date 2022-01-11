import {
  TimeLeftStyled,
  TimerLabelStyled,
  TimerStyled
} from "../styles/TimerStyled";

interface TimerProps {
  secondsLeft: number;
  isSession: boolean;
}

const Timer = ({ secondsLeft, isSession }: TimerProps) => {
  const displayClock = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const label = isSession ? "Session" : "Break";

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
