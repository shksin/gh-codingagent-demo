const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;


export const getCreditCardNumber = () => {
  // Generate 16 random digits
  const digits: string[] = [];
  for (let i = 0; i < MAX_DIGITS; i++) {
    digits.push(Math.floor(Math.random() * 10).toString());
  }
  
  // Format as groups of 4 digits separated by spaces
  const formatted = digits.join('').match(/.{1,4}/g)?.join(' ') || '';
  return formatted;
};


export function generateExpiryDate() {
  return "15/25";
}
