// use std::collections::HashMap;
// use std::fmt::Error;
use std::env;


fn main (){

    match env::var("boo") {
        Ok(val) => println!("{}", val),
        Err(e) => println!("{:?}", e)
    }

}