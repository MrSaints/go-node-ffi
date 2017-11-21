# go-node-ffi

An experiment using [Go 1.5](https://blog.golang.org/go1.5) [buildmode](https://golang.org/s/execmodes) to compile shared C libraries, and to subsequently access them through NodeJS bindings via [node-ffi](https://github.com/node-ffi/node-ffi).

Update: also tested on Go 1.9, see troubleshooting section for more info.

Simply put, let's try calling Go functions from JavaScript.


## Installation

1. Download, and install the package:

    ```shell
    go get github.com/mrsaints/go-node-ffi
    ```

2. Install npm dependencies:

    ```shell
    npm install
    ```


## Building

```shell
go build -buildmode=c-shared -o go-node-ffi.so
```


## Running

Tinker with the sample file `go-node-ffi.js` by running:

```shell
node go-node-ffi.js
```

## Troubleshooting

If you get:

```
panic: runtime error: cgo result has Go pointer
```

Then try setting the following environment var:

```
export GODEBUG=cgocheck=0
```

This still needs to be resolved.
