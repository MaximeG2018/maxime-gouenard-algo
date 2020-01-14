
// Ex03
// Write a method to decide if two strings are anagrams or not.

function anagramme(str1, str2) {

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if (str1 === str2)
        return console.log('Anagram - OK')

    return console.log('Anagram - KO')
}
