'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: "Marcus Aurelius", phone: "+380445554433"},
    {name: "Alice Murmur", phone: "+380416654903"},
    {name: "Mary Jane", phone: "+380400789631"},
    {name: "Pelageya Sergeevna", phone: "+380662550001"},
    {name: "Raiden Shogun", phone: "+380330907887"},
    
];

const findPhoneByName = (name) => {
    for (const people of phonebook) {
        if (typeof people.name === "string" && people.name === name) return (`The number of ${name} is ${people.phone}`);
    }
};

module.exports = { phonebook, findPhoneByName };
