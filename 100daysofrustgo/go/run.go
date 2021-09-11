package main

import (
	"fmt"
	// "errors"
	// "github.com/francoispqt/lists/slices"
	// s "strings"
	// "os"
	// "encoding/json"
	"net/http"
)

var p = fmt.Println

var f = fmt.Fprintf

func responder(res http.ResponseWriter, req *http.Request){
	f(res, "Hello World")
}

func headers(w http.ResponseWriter, req *http.Request) {	
		p(req.Method)
		for name, headers := range req.Header {
			for _, h := range headers {
				fmt.Fprintf(w, "%v: %v\n", name, h)
			}
		}
	}


func main (){
	
	http.HandleFunc("/", responder)
	http.HandleFunc("/headers", headers)

	http.ListenAndServe(":5000", nil)


}