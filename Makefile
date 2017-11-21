ALL:
	go tool cgo go-node-ffi.go
	go build -buildmode=c-shared -o go-node-ffi.so go-node-ffi.go
