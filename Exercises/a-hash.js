'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    Marcus: "+380445554433",
    Alice: "+380416654903",
    Mary: "+380400789631",
    Pelageya: "+380662550001",
    Raiden: "+380330907887"
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
