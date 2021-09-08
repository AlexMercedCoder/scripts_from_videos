package main

import (
	"fmt"
	// "errors"
	// "github.com/francoispqt/lists/slices"
	// "strings"
	// "os"
	"encoding/json"
)

type Person struct {
	Name string `json:"name"`
	Age int `json:"age"`
}

func main (){

	var result map[string]string

	err := json.Unmarshal([]byte(`{"age":"36","name":"Alex Merced"}`), &result)

	fmt.Println("error:", err)
	fmt.Println("result:", result)

	

}