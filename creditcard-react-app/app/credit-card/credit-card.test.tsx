import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number format", () => {
  const cardNumber = getCreditCardNumber();
  // Check format: 16 digits, grouped in 4s, separated by spaces
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
});

test("getCreditCardNumber returns different numbers on multiple calls", () => {
  const card1 = getCreditCardNumber();
  const card2 = getCreditCardNumber();
  expect(card1).not.toBe(card2);
});
