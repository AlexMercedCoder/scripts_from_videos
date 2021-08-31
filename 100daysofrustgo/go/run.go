package main

import (
	"fmt"
	// "github.com/francoispqt/lists/slices"
	// "strings"
)

func main (){

	b := []int{1,2,3,4,5,6}

	for index, item := range b {
		fmt.Println(index)
		fmt.Println(item)
	}

}