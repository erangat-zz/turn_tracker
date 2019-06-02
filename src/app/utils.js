const valueToDoubleDigits = value => {
  return value < 10 ? "0" + value : "" + value;
};

export const ticksToTime = ticks => {
  // Seconds
  const miliSeconds = ticks % 10;
  const totalSeconds = Math.floor(ticks / 10);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(minutes / 60);

  return (
    hours +
    ":" +
    valueToDoubleDigits(minutes) +
    ":" +
    valueToDoubleDigits(seconds) +
    "." +
    miliSeconds
  );
};

export const ticksToShortTime = ticks => {
  // Seconds
  const miliSeconds = ticks % 10;
  const totalSeconds = Math.floor(ticks / 10);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);

  return minutes + ":" + valueToDoubleDigits(seconds) + "." + miliSeconds;
};
