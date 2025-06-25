const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

// return random 16 digit credit card number
export const getCreditCardNumber = () => {
  // Generate 16 random digits and format as #### #### #### ####
  const digits = Array.from({ length: MAX_DIGITS }, () => Math.floor(Math.random() * 10)).join("");
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};


export function generateExpiryDate() {
  return "15/25";
}
