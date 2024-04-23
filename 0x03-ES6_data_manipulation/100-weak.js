//a const instance of WeakMap and name it weakMap.
//function named queryAPI. It should accept an endpoint argument like
export const weakMap = new WeakMap();

export function queryAPI(endp) {
  let qrc = weakMap.get(endp) || 0;
  qrc += 1;
  weakMap.set(endp, qrc);

  if (qrc >= 5) {
    throw Error('Endpoint load is high');
  }
}
