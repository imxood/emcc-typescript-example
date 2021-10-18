/// <reference types="emscripten" />
/** Above will import declarations from @types/emscripten, including Module etc. */

// This will merge to the existing EmscriptenModule interface from @types/emscripten
// If this doesn't work, try globalThis.EmscriptenModule instead.
export interface AddModule extends EmscriptenModule {
    // Module.cwrap() will be available by doing this.
    // Requires -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwrap']"
    cwrap: typeof cwrap;
    // Exported from add.cpp
    // Requires "EXPORTED_FUNCTIONS=['_add']"
    _add(a: number, b: number): number;
    // or using cwrap. See below
    add(a: number, b: number): number;
}

export default function create_ffmpeg_module(mod?: any): AddModule;