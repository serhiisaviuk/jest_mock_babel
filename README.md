# JEST Mock Set-up with Babel

This project an **example**, how you could set-up your project, for make work your test correct with EcmaScript modules.
Example how to correct mock Class.

Babel using here as transformer to CommonJS.

### As jest normally still don't support ES modules:

* It could be actual for them, who don't wanna use: `node --experimental-vm-modules node_modules/jest-cli/bin/jest.js` - experimental flag.

* **OR/AND** `jest.unstable_mockModule` - became **stable**.

Set-up in package.json workable, for another version of jest, babel or transformers **issues** could come up. 

