#[macro_use]
extern crate diesel;
extern crate dotenv;

use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result};
use serde::Deserialize;

use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenv::dotenv;
use std::env;

pub mod schema;
pub mod models;

#[derive(Deserialize)]
struct Meal {
    cheese: String,
    bread: String
}

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .expect(&format!("Error connecting to {}", database_url))
}

#[get("/")]
async fn hello () -> impl Responder {
    use schema::posts::dsl::*;
    use models::Post;

    let connection = establish_connection();
    let results = posts.filter(published.eq(true))
        .limit(5)
        .load::<Post>(&connection)
        .expect("Error loading posts");

    println!("Displaying {} posts", results.len());
    for post in results {
        println!("{}", post.title);
        println!("----------\n");
        println!("{}", post.body);
    }
    HttpResponse::Ok().body("Hello World")
}

#[post("/echo")]
async fn echo (req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey There!")
}

#[get("/eat/{this}")]
async fn eat(web::Path(this):web::Path<String>) -> Result<String> {
    Ok(format!("I'm going to eat {}", this))
}

#[get("/meal")]
async fn meal(meal: web::Query<Meal>) -> Result<String> {
    Ok(format!("I'm going to eat {} and {}", meal.cheese, meal.bread))
}

#[post("/postmeal")]
async fn postmeal(body: web::Json<Meal>) -> Result<String> {
    Ok(format!("I'm going to eat {} and {}", body.cheese, body.bread))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(eat)
            .service(meal)
            .service(postmeal)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind("127.0.0.1:4000")?
    .run()
    .await


}
