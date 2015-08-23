var ffi = require("ffi");
var hw_path = "/home/mrsaints/Workspace/golang/src/github.com/mrsaints/go-helloworld/go-helloworld";

var hw = ffi.Library(hw_path, {
  "HelloWorld": ["void", []]
});

hw.HelloWorld();