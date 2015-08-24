# go-node-ffi

An experiment using [Go 1.5](https://blog.golang.org/go1.5) [buildmode](https://golang.org/s/execmodes) to compile shared C libraries, and to subsequently access them through NodeJS bindings via [node-ffi](https://github.com/node-ffi/node-ffi).

Simply put, let's try calling Go functions from JavaScript.


# Installation

1. Download, and install the package:

    ```shell
    go get github.com/mrsaints/go-node-ffi
    ```

2. Install npm dependencies:

    ```shell
    npm install
    ```


# Building

```shell
go build -buildmode=c-shared -o go-helloworld.so
```


# Running

Tinker with the sample file `helloworld.js` by running:

```shell
node helloworld.js
```