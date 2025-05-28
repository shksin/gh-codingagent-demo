import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number format", () => {
  const cardNumber = getCreditCardNumber();
  
  // Test format is "#### #### #### ####" (16 digits + 3 spaces)
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
});

test("getCreditCardNumber returns exactly 16 digits", () => {
  const cardNumber = getCreditCardNumber();
  const digitsOnly = cardNumber.replace(/\s/g, '');
  
  expect(digitsOnly).toHaveLength(16);
  expect(digitsOnly).toMatch(/^\d{16}$/);
});

test("getCreditCardNumber returns exactly 3 spaces", () => {
  const cardNumber = getCreditCardNumber();
  const spaces = cardNumber.split(' ');
  
  expect(spaces).toHaveLength(4); // 4 groups means 3 spaces
  expect(cardNumber.split('').filter(char => char === ' ')).toHaveLength(3);
});

test("getCreditCardNumber generates different numbers on multiple calls", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  const cardNumber3 = getCreditCardNumber();
  
  // With random generation, it's extremely unlikely all three would be the same
  const uniqueNumbers = new Set([cardNumber1, cardNumber2, cardNumber3]);
  expect(uniqueNumbers.size).toBeGreaterThan(1);
});
