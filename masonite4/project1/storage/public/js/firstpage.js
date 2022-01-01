console.log("This is from the firstpage.js")

// $("button").on("click", () => {
//     $("body").append($("<h1>").text("Hello World"))
// })


// function HelloWorld(props){
//     return <h1>Hello World</h1>
// }

// ReactDOM.render(<HelloWorld/>, document.querySelector("#app"))

const TwoWayBinding = {
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods: {
        click(){
            this.message = "goodbye Vue!"
        }
    }
  }

Vue.createApp(TwoWayBinding).mount('#two-way-binding')