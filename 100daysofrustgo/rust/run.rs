// use std::collections::HashMap;
// use std::fmt::Error;
// use std::env;
use std::io::prelude::*;
use std::net::TcpListener;
use std::net::TcpStream;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:5000").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        handle_connection(stream);
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];

    stream.read(&mut buffer).unwrap();

    let response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n'Hello World'\r\n";

    stream.write(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}