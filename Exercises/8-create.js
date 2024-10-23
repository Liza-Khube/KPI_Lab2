'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (name, city) => {
  if (typeof name !== "string" || typeof city !== "string") throw "Name and city expected to be string";
  return {name, city};
};

module.exports = { createUser };
