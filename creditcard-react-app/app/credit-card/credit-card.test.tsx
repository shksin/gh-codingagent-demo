import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  
  // Should be exactly 19 characters (16 digits + 3 spaces)
  expect(cardNumber).toHaveLength(19);
  
  // Should match the format #### #### #### ####
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Should contain only digits and spaces
  expect(cardNumber).toMatch(/^[\d ]+$/);
  
  // Should have exactly 3 spaces
  expect(cardNumber.split(' ')).toHaveLength(4);
});

test("getCreditCardNumber returns 16 digits", () => {
  const cardNumber = getCreditCardNumber();
  const digitsOnly = cardNumber.replace(/\s/g, '');
  expect(digitsOnly).toHaveLength(16);
  expect(digitsOnly).toMatch(/^\d{16}$/);
});

test("getCreditCardNumber returns number with 3 spaces", () => {
  const cardNumber = getCreditCardNumber();
  const spaceCount = (cardNumber.match(/\s/g) || []).length;
  expect(spaceCount).toBe(3);
});

test("getCreditCardNumber returns different numbers on multiple calls", () => {
  const cardNumbers = new Set();
  
  // Generate 10 credit card numbers and ensure they are different
  for (let i = 0; i < 10; i++) {
    const cardNumber = getCreditCardNumber();
    cardNumbers.add(cardNumber);
  }
  
  // All 10 numbers should be unique (very high probability with random generation)
  expect(cardNumbers.size).toBe(10);
});
