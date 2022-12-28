import { Context, Get, render } from "@foal/core";

export class MyControllerController {
  @Get("/")
  foo(ctx: Context) {
    return render("./templates/cheese.html", { cheese: "gouda" });
  }
}
