package main

import (
	"fmt"
	"time"
)

func one(){
	fmt.Println("Hello World 1")
	fmt.Println("Hello World 2")
	fmt.Println("Hello World 3")
}

func two(){
	fmt.Println("Goodbye World 1")
	fmt.Println("Goodbye World 2")
	fmt.Println("Goodbye World 3")
}


func main (){

	fmt.Println("Begin")

	mychannel := make(chan string)

	go one()

	go two()

	go func (){
		mychannel <- "This Works!"
	}()

	time.Sleep(time.Second)

	result := <- mychannel

	fmt.Println(result)

	fmt.Println("Done")

}