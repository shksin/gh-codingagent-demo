const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

export const getCreditCardNumber = () => {
  const digits = Array.from({ length: MAX_DIGITS }, () => Math.floor(Math.random() * 10));
  return digits.map((d, i) => (i > 0 && i % 4 === 0 ? ' ' : '') + d).join('');
};

export function generateExpiryDate() {
  return "15/25";
}
