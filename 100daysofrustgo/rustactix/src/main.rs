use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder, Result};
use serde::Deserialize;

#[derive(Deserialize)]
struct Meal {
    cheese: String,
    bread: String
}

#[get("/")]
async fn hello () -> impl Responder {
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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(eat)
            .service(meal)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind("127.0.0.1:4000")?
    .run()
    .await


}
