const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;


//return a random 16 digit credit card number in format "1234 5678 9012 3456"
export const getCreditCardNumber = () => {
  const digits = Array.from({ length: MAX_DIGITS }, () => Math.floor(Math.random() * 10));
  const formattedNumber = digits.reduce((acc, digit, index) => {
    return acc + (index > 0 && index % 4 === 0 ? " " : "") + digit;
  }
, "");
  // return formattedNumber;

  // return "1234 5678 9012 3456";
};

export function generateExpiryDate() {
  return "15/25";
}
