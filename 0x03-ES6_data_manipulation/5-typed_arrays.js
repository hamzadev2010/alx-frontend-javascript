export default function createInt8TypedArray(length, position, value) {
  const buf = new ArrayBuffer(length);
  const dt = new DataView(buf);

  if (position >= length || position < 0) { throw new Error('Position outside range');
  } else {
    dt.setInt8(position, value);
  }

  return dt;
};
