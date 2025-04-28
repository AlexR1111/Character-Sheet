import {expect, test} from 'vitest';
import {D20,D12,D10,D8,D6,D4} from './dice.js';

test('Der Gewürfelte Wert ist zwischen 1 und 20', () => {
    expect(D20())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(20);
})

test('Der Gewürfelte Wert ist zwischen 1 und 12', () => {
    expect(D12())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(12);
})

test('Der Gewürfelte Wert ist zwischen 1 und 10', () => {
    expect(D10())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(10);
})

test('Der Gewürfelte Wert ist zwischen 1 und 8', () => {
    expect(D8())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(8);
})

test('Der Gewürfelte Wert ist zwischen 1 und 6', () => {
    expect(D6())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(6);
})

test('Der Gewürfelte Wert ist zwischen 1 und 4', () => {
    expect(D4())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(4);
})