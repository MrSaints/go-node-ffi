var FFI = require("ffi");
var Ref = require("ref");
var Struct = require("ref-struct");

var hw_path = "/home/mrsaints/Workspace/golang/src/github.com/mrsaints/go-node-ffi/go-node-ffi";

/*
 * GoString ABI-compliant struct
 */
var GoString = Struct({
    p: "char *",
    n: "int"
});

function NewGoString(v) {
    var _gs = new GoString();
    _gs.p = Ref.allocCString(v);
    _gs.n = v.length;
    return _gs;
}

var hw = FFI.Library(hw_path, {
  "HelloWorld": ["string", []],
  "Greet": ["string", [GoString]],
  "Add": ["int", ["int", "int"]]
});

var helloWorld = hw.HelloWorld();
console.log(helloWorld);

var addition = hw.Add(2, 4);
console.log(addition);

var john = NewGoString("John");
var greeting = hw.Greet(john);
console.log(greeting);
