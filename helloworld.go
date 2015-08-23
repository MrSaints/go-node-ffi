// package name: helloworld
package main

import "C"
import "fmt"

func main() {

}

//export HelloWorld
func HelloWorld() {
	fmt.Println("Hello World!")
}
