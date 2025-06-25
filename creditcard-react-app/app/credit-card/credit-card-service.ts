const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

// return random 16 digit credit card number
export const getCreditCardNumber = () => {
  const digits = Array.from({ length: MAX_DIGITS }, () => Math.floor(Math.random() * 10));
  return digits.join("");
};
  //return "1234 5678 9012 3456";


export function generateExpiryDate() {
  return "15/25";
}
