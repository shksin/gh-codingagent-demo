import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  
  // Check format - should match "#### #### #### ####" pattern
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Check number of digits
  const digits = cardNumber.replace(/\s/g, '');
  expect(digits.length).toBe(16);
  
  // Check number of spaces
  const spaces = cardNumber.split('').filter(char => char === ' ').length;
  expect(spaces).toBe(3);
});

test("getCreditCardNumber returns different numbers on each call", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  const cardNumber3 = getCreditCardNumber();
  
  // At least one of the numbers should be different
  // (extremely small chance all three are identical)
  const allSame = 
    cardNumber1 === cardNumber2 && 
    cardNumber2 === cardNumber3;
    
  expect(allSame).toBe(false);
});
