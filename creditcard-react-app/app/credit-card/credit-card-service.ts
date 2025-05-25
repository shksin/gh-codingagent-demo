const MAX_DIGITS = 16;
const EXPIRE_YEAR_LENGTH = 3;

export const getCreditCardNumber = () => {
  // Generate 16 random digits
  let digits = '';
  for (let i = 0; i < MAX_DIGITS; i++) {
    digits += Math.floor(Math.random() * 10);
  }
  
  // Format as "#### #### #### ####"
  return digits.match(/.{1,4}/g)!.join(' ');
};

export function generateExpiryDate() {
  return "15/25";
}
