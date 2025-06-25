import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number", () => {
  const cardNumber = getCreditCardNumber();
  // Should match 16 digits in #### #### #### #### format
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  // Should be 19 characters including spaces
  expect(cardNumber.length).toBe(19);
  // Should be different on multiple calls (high probability)
  const anotherCardNumber = getCreditCardNumber();
  expect(cardNumber).not.toBe(anotherCardNumber);
});
