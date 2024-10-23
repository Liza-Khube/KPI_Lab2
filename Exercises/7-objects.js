'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const objectConst = {name: "Anton"};
    let objectLet = {name: "Maria"};

    objectConst.name = "Pavlo";
    objectLet.name = "Tetiana";

    /*
    objectConst = {year: 56};
    Output error, because "objectConst" was initialized as const
    */

    objectLet = {year: 56};

    return objectLet;
};

module.exports = { fn };
