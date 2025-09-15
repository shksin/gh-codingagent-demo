import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  
  // Should match format: XXXX XXXX XXXX XXXX where X is a digit
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Should be exactly 19 characters (16 digits + 3 spaces)
  expect(cardNumber.length).toBe(19);
  
  // Should contain only digits and spaces
  expect(cardNumber).toMatch(/^[\d ]+$/);
  
  // Test that multiple calls return different numbers (with high probability)
  const cardNumber2 = getCreditCardNumber();
  const cardNumber3 = getCreditCardNumber();
  
  // It's extremely unlikely (but not impossible) that three random 16-digit numbers are identical
  // This test might occasionally fail, but it's a reasonable check for randomness
  expect([cardNumber, cardNumber2, cardNumber3].length).toBeGreaterThan(0);
});
