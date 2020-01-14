import { uniqueCharacters } from './src/01.ArraysAndStrings/ex01';

describe('ex01 : Implement an algorithm to determine if a string has all unique characters', () => {
    test('it return TRUE if a string is unique characters', () => {
        expect(uniqueCharacters('helo')).toEqual(true);
    });

    test('it return FALSE if a string is not unique characters', () => {
        expect(uniqueCharacters('coucou')).toEqual(false);
    });
});
