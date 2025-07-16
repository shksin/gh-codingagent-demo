import { expect, test } from "vitest";
import { getCreditCardNumber } from "./credit-card-service";

test("getCreditCardNumber returns a valid credit card number format", () => {
  const cardNumber = getCreditCardNumber();
  
  // Test the format: #### #### #### ####
  expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
  
  // Test the length (19 characters including spaces)
  expect(cardNumber).toHaveLength(19);
  
  // Test that it contains exactly 16 digits
  const digitsOnly = cardNumber.replace(/\s/g, '');
  expect(digitsOnly).toHaveLength(16);
  expect(digitsOnly).toMatch(/^\d{16}$/);
});

test("getCreditCardNumber returns different values on multiple calls", () => {
  const cardNumber1 = getCreditCardNumber();
  const cardNumber2 = getCreditCardNumber();
  const cardNumber3 = getCreditCardNumber();
  
  // While theoretically possible for random numbers to be the same,
  // the probability is extremely low (1 in 10^16) for 16 random digits
  expect(cardNumber1).not.toBe(cardNumber2);
  expect(cardNumber2).not.toBe(cardNumber3);
  expect(cardNumber1).not.toBe(cardNumber3);
});

test("getCreditCardNumber format consistency", () => {
  // Test multiple generations to ensure consistent format
  for (let i = 0; i < 10; i++) {
    const cardNumber = getCreditCardNumber();
    
    // Should always match the pattern
    expect(cardNumber).toMatch(/^\d{4} \d{4} \d{4} \d{4}$/);
    
    // Should have exactly 3 spaces
    expect(cardNumber.split(' ')).toHaveLength(4);
    
    // Each group should be exactly 4 digits
    const groups = cardNumber.split(' ');
    groups.forEach(group => {
      expect(group).toHaveLength(4);
      expect(group).toMatch(/^\d{4}$/);
    });
  }
});
