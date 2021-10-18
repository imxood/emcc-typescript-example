/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */
/** It is not .ts file but declaring reference will pass TypeScript Check. */

Module['onRuntimeInitialized'] = function () {
    // Just Module._add() will work, but I'm just demontrating usage of cwrap
    Module['add'] = cwrap('add', 'number', ['number', 'number']);
}