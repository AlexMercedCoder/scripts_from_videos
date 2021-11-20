///////////////////////////////
//         APP STATE         //
///////////////////////////////
const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {}
}
let question = []
////////////////////////////////
//         DOM ELEMENT       //
///////////////////////////////
const $question = $('#question')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $d = $('#d')
const p1Score = $('#player1 h4')
const p2Score = $('#player2 h4')
console.log(p1Score, p2Score)
/////////////////////////////////
// FUNCTIONS
//////////////////////////////
const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]
    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)
    p1Score.text()=state.player1
    p2Score.text()=state.player2
}
/////////////////////////
const URL = "https://cdn.contentful.com/spaces/gdbvn69ne4jw/environments/project_1-2021-10-12/entries?access_token=EIIsT4Udy9I7PF134kMk-gqIJMMRhQxb8bu2v37RKYM&content_type=triviaQue"
$.ajax(URL)
.then((data)=> {
   question = data.items.map((q) =>  q.fields)
   console.log(data)
   console.log(question)
   setBoard(question)
})
