const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

export const getCreditCardNumber = () => {
  // Generate 16 random digits
  const digits = Array.from({ length: MAX_DIGITS }, () => 
    Math.floor(Math.random() * 10).toString()
  );
  
  // Format as groups of 4 digits separated by spaces
  return [
    digits.slice(0, 4).join(''),
    digits.slice(4, 8).join(''),
    digits.slice(8, 12).join(''),
    digits.slice(12, 16).join('')
  ].join(' ');
};

export function generateExpiryDate() {
  return "15/25";
}
