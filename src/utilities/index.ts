const shuffleArray = function<T>(array: T[]): T[] {
  const newArray = array.slice();
  
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const randomElement = function<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
};

export const randomElements = function<T>(array: T[], count: number): T[] {
  if(count === 0) return [];

  if(!array || array.length === 0) return [];

  if(count > array.length) return array;

  const shuffledArray = shuffleArray(array);
  return shuffledArray.slice(0, count);
};
