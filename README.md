# go-node-ffi

An experiment using [Go 1.5](https://blog.golang.org/go1.5) [buildmode](https://golang.org/s/execmodes) to compile shared C libraries, and to subsequently access them through NodeJS bindings via [node-ffi](https://github.com/node-ffi/node-ffi).

Simply put, let's try calling Go functions from JavaScript.

Tested with `go1.9.1`, and Node `v7.8.0`.


## Installation

1. Download, and install the package:

    ```shell
    go get github.com/mrsaints/go-node-ffi
    ```

2. Install NPM dependencies:

    ```shell
    yarn

    // OR...
    npm install
    ```


## Building

```shell
yarn build

// OR...
go build -buildmode=c-shared -o go-node-ffi.so
```


## Running

Tinker with the sample file `go-node-ffi.js`, and run:

```shell
yarn start

// OR...
node go-node-ffi.js
```


## Debugging

Enable verbose logging:

```
export DEBUG="ref,ref:struct"
```

Now, run the program (see above).
