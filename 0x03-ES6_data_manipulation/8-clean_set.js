const cleanSet = (set, startString) => {
  const resultArray = Array.from(set)
    .filter((item) => typeof item === 'string' && item.startsWith(startString))
    .map((item) => item.slice(startString.length));

  return resultArray.join('-');
};

export default cleanSet;
