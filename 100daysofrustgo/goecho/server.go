package main

import (
	"net/http"
	"github.com/labstack/echo/v4"
)

func main(){
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		qp := c.QueryParam("cheese")
		return c.String(http.StatusOK, qp)
	})

	e.GET("/eat/:this", func(c echo.Context) error {
		p := c.Param("this")
		return c.String(http.StatusOK, p)
	})

	e.Logger.Fatal(e.Start(":3000"))
}