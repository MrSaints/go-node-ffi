package main

import (
	"C"
	"fmt"
)

func main() {

}

//export HelloWorld
func HelloWorld() string {
	return "Hello World!"
}

//export Greet
func Greet(name string) string {
	return fmt.Sprintf("Greetings %s!\n", name)
}

//export Add
func Add(x, y int) int {
	return x + y
}
