export const getRandomNumber = (max) => {
  const pickedNumber = Math.random().toString().slice(5, 6);
  // *
  if (pickedNumber >= max) return getRandomNumber(max);

  return pickedNumber;
};
