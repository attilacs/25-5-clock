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
