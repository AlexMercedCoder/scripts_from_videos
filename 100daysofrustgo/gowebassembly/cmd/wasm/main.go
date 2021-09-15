package main

import (  
    "fmt"
    "syscall/js"
    "encoding/json"
)

func prettyJson(input string) (string, error) {  
    var raw interface{}
    if err := json.Unmarshal([]byte(input), &raw); err != nil {
        return "", err
    }
    pretty, err := json.MarshalIndent(raw, "", "  ")
    if err != nil {
        return "", err
    }
    return string(pretty), nil
}

func jsonWrapper() js.Func {  
    jsonFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
            if len(args) != 1 {
                    return "Invalid no of arguments passed"
            }
            inputJSON := args[0].String()
            fmt.Printf("input %s\n", inputJSON)
            pretty, err := prettyJson(inputJSON)
            if err != nil {
                    fmt.Printf("unable to convert to json %s\n", err)
                    return err.Error()
            }
            return pretty
    })
    return jsonFunc
}

func main() {  
    fmt.Println("Go Web Assembly")
    js.Global().Set("formatJSON", jsonWrapper())
    <-make(chan bool)
}