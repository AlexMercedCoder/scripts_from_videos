package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
	"fmt"
	// "encoding/json"
)


func main(){

	//COnnect
	db := Connect()

	// ECHO CODE BELOW
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		qp := c.QueryParam("cheese")
		return c.String(http.StatusOK, qp)
	})

	e.GET("/eat/:this", func(c echo.Context) error {
		p := c.Param("this")
		return c.String(http.StatusOK, p)
	})

	e.POST("/getbody", func(c echo.Context) error {
		body := new(Dog)
		err := c.Bind(body) 
		
		fmt.Println(err)
		fmt.Println(body)

		u := &Dog{
			Name:  body.Name,
			Age: body.Age,
		  }

		db.Create(u)

		var dog Dog

		db.First(&dog, u.ID)

		  return c.JSON(http.StatusOK, dog)

		// if err != nil {
		// 	// response, err := json.Marshal(body)
		// 	// if err != nil {
		// 		return c.JSON(http.StatusOK, &body)
		// 	// }
		// 		// return c.JSON(http.StatusOK, err)
			
		// }
		
		// return c.JSON(http.StatusOK, err)
	})

	e.Logger.Fatal(e.Start(":3000"))
}