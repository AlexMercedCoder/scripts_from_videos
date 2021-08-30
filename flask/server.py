from flask import Flask, request, render_template_string, render_template



app = Flask(__name__)

@app.get("/")
def home():
    return {"Hello": "World"}

@app.get("/param/<param>")
def param(param):
    return render_template("cheese.html", context={"cheese": "gouda"})



if (__name__ == "__main__"):
    app.run(host="localhost", port=4000, debug=True)
    print("Listening on Port 4000")