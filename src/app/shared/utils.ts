export const getRandomInteger = (min: number = 0, max: number = 1): number => {
  const rand: number = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};
