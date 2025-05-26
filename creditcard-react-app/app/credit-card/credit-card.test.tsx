import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  
  // Test that the credit card number has the correct format
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Test that the credit card number has exactly 16 digits
  const digitsOnly = cardNumber.replace(/\s/g, '');
  expect(digitsOnly.length).toBe(16);
  
  // Test that the credit card number has 3 spaces
  const spaces = cardNumber.split('').filter(char => char === ' ').length;
  expect(spaces).toBe(3);
});

test("getCreditCardNumber generates different numbers on different calls", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  
  // There's a very small chance this could fail randomly, but it's very unlikely
  expect(cardNumber1).not.toBe(cardNumber2);
});
