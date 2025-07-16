const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;


export const getCreditCardNumber = () => {
  // Generate 16 random digits
  const digits = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10));
  
  // Format as #### #### #### ####
  const formatted = [
    digits.slice(0, 4).join(''),
    digits.slice(4, 8).join(''),
    digits.slice(8, 12).join(''),
    digits.slice(12, 16).join('')
  ].join(' ');
  
  return formatted;
};


export function generateExpiryDate() {
  return "15/25";
}
