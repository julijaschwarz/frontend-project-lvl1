export const minValue = 1;
export const maxValue = 100;

export const generateRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};
