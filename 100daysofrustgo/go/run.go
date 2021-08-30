package main

import (
	"fmt"
	"github.com/francoispqt/lists/slices"
	// "strings"
)

func main (){

	// var myStrArr [5]string = [5]string{"Hello", "World", "How", "Are", "You"}
	var myStrSlice slices.StringSlice = []string{"Hello", "World", "How", "Are", "You"}
	filteredSlice := myStrSlice.Map(func (index int, value string) string {
		return value + "Cheese"
	})
	fmt.Println(filteredSlice)

}