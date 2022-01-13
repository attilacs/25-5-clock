export const incrementLength = (
  value: number,
  setter: React.Dispatch<React.SetStateAction<number>>,
  isRunning: boolean,
  timeLeftSetter: React.Dispatch<React.SetStateAction<number>>,
  mode: string,
  selected: string
) => {
  const maxLength = 60;
  if (!isRunning && value < maxLength) {
    const updatedValue = value + 1;
    setter(updatedValue);
    if (mode === selected && timeLeftSetter) {
      timeLeftSetter(updatedValue * 60);
    }
  }
};

export const decrementLength = (
  value: number,
  setter: React.Dispatch<React.SetStateAction<number>>,
  isRunning: boolean,
  timeLeftSetter: React.Dispatch<React.SetStateAction<number>>,
  mode: string,
  selected: string
) => {
  const minLength = 1;
  if (!isRunning && minLength < value) {
    const updatedValue = value - 1;
    setter(updatedValue);
    if (mode === selected && timeLeftSetter) {
      timeLeftSetter(updatedValue * 60);
    }
  }
};
