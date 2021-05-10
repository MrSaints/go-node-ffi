const FFI = require("ffi-napi");
const Ref = require("ref-napi");
const Struct = require("ref-struct-di")(Ref);

const hwSharedLibPath = "./go-node-ffi";

/*
 * GoString ABI-compliant struct
 * See https://github.com/golang/go/wiki/cgo#go-strings-and-c-strings
 */
const goString = Struct({
    p: "string",
    n: "longlong",
});

class GoString extends goString {
    // GoString (cgo) -> JavaScript string
    static get(buffer, offset) {
        const _gs = goString.get(buffer, offset);
        return _gs.p.slice(0, _gs.n);
    }

    // JavaScript string -> GoString (cgo)
    static set(buffer, offset, value) {
        const _gs = new goString({
            p: value,
            n: value.length,
        });
        return goString.set(buffer, offset, _gs);
    }
}

const hw = FFI.Library(hwSharedLibPath, {
    HelloWorld: [GoString, []],
    Greet: [GoString, [GoString]],
    Add: ["int", ["int", "int"]],
});

const helloWorld = hw.HelloWorld();
console.log(helloWorld);

const addition = hw.Add(2, 4);
console.log(addition);

const greeting = hw.Greet("John");
console.log(greeting);
