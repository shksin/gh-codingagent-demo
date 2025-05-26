const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

export const getCreditCardNumber = () => {
  // Generate 16 random digits
  let cardNumber = '';
  for (let i = 0; i < MAX_DIGITS; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }
  
  // Format with spaces after every 4 digits
  return cardNumber.replace(/(.{4})/g, '$1 ').trim();
};

export function generateExpiryDate() {
  return "15/25";
}
