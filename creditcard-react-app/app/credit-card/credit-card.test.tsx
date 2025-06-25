import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number in correct format", () => {
  const cardNumber = getCreditCardNumber();
  
  // Should match format #### #### #### ####
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Should have exactly 16 digits
  const digitsOnly = cardNumber.replace(/\s/g, '');
  expect(digitsOnly).toHaveLength(16);
  expect(digitsOnly).toMatch(/^\d{16}$/);
  
  // Should have exactly 3 spaces
  const spaces = cardNumber.match(/\s/g);
  expect(spaces).toHaveLength(3);
});

test("getCreditCardNumber returns different numbers on multiple calls", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  const cardNumber3 = getCreditCardNumber();
  
  // All should be in correct format
  expect(cardNumber1).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  expect(cardNumber2).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  expect(cardNumber3).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // They should be different (very unlikely to be the same with random generation)
  expect(cardNumber1).not.toBe(cardNumber2);
  expect(cardNumber2).not.toBe(cardNumber3);
  expect(cardNumber1).not.toBe(cardNumber3);
});
