import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  
  // Check format: 16 digits with spaces after every 4 digits
  expect(cardNumber).toMatch(/^(\d{4} ){3}\d{4}$/);
  
  // Check there are 16 digits total (excluding spaces)
  const digitsOnly = cardNumber.replace(/\s/g, '');
  expect(digitsOnly.length).toBe(16);
  
  // Check there are 3 spaces
  const spacesCount = cardNumber.split(' ').length - 1;
  expect(spacesCount).toBe(3);
});

test("getCreditCardNumber generates different numbers on each call", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  
  expect(cardNumber1).not.toBe(cardNumber2);
});
