export const incrementLength = (
  value: number,
  setter: React.Dispatch<React.SetStateAction<number>>,
  isRunning: boolean
) => {
  const maxLength = 60;
  if (!isRunning && value < maxLength) {
    setter(value + 1);
  }
};

export const decrementLength = (
  value: number,
  setter: React.Dispatch<React.SetStateAction<number>>,
  isRunning: boolean
) => {
  const minLength = 1;
  if (!isRunning && minLength < value) {
    setter(value - 1);
  }
};
