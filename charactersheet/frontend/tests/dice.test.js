import {expect, test} from 'vitest';
import {D20} from './dice.js';

test('Der Gewürfelte Wert ist zwischen 1 und 20', () => {
    expect(D20())
        .toBeGreaterThanOrEqual(1)
        .toBeLessThanOrEqual(20);
})