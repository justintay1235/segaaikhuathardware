export const ADDRESS_LINES = [
  "Lot 14, Jalan Perindustrian",
  "Shah Alam, Selangor, Malaysia",
];

export const ADDRESS = ADDRESS_LINES.join(", ");

export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;
