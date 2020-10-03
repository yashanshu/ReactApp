const { TestScheduler } = require("jest");

const add = (a, b) => a + b;

const generateGreeting = (name = 'Anon') => `Hello ${name}`;

test('should add two numbers', () => {
    expect(add(5,4)).toBe(9);
});


test('check for valid greeting', () => {
    expect(generateGreeting("Jackson")).toBe("Hello Jackson");
});

test('test for empty name', () => {
    expect(generateGreeting()).toBe("Hello Anon");
});