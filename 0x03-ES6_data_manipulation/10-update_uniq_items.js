//function named updateUniqueItems that returns an updated
//map for all items with initial quantity at 1.
export default function updateUniqueItems(elements) {
  if (!(elements instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedItems = new Map();

  for (const [key, value] of elements.entries()) {
    updatedItems.set(key, value === 1 ? 100 : value);
  }

  return updatedItems;
}
