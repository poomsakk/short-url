let counter: number = 0;

export const getCounter = () => counter;
export const incrementCounter = () => counter++;
export const resetCounter = () => (counter = 0);