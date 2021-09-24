package main

import (
	"gorm.io/gorm"
	"gorm.io/driver/sqlite"
)

type Dog struct {
	gorm.Model
	Name string `json: "name"`
	Age int `json: "age"`
}

func Connect() *gorm.DB {
	// DATABASE CODE
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
  		if err != nil {
    	panic("failed to connect database")
  		}

	db.AutoMigrate(&Dog{})

	return db
}