var FFI = require("ffi");
var Ref = require("ref");
var Struct = require("ref-struct");

var hw_path = "./go-node-ffi";

/*
 * GoString ABI-compliant struct
 */
var GoString = Struct({
    p: "string",
    n: "int",
});

function NewGoString(v) {
    var _gs = new GoString();
    _gs.p = v
    _gs.n = v.length;
    return _gs;
}

function GoStringToJsString(gostring) {
  return gostring.p.slice(0, gostring.n)
}

var hw = FFI.Library(hw_path, {
  "HelloWorld": [GoString, []],
  "Greet": [GoString, [GoString]],
  "Add": ["int", ["int", "int"]]
});

var helloWorld = hw.HelloWorld();
console.log(GoStringToJsString(helloWorld));

var addition = hw.Add(2, 4);
console.log(addition);

var john = NewGoString("John");
var greeting = hw.Greet(john);
console.log(GoStringToJsString(greeting));
