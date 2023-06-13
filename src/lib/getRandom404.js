export const getRandom404 = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
