let formDOM = document.querySelector("#userForm")
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let clearDOM = document.querySelector("#clear")
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0

counterDOM.innerHTML = counter

formDOM.addEventListener("submit", submitForm)
increaseDOM.addEventListener("click", count)
decreaseDOM.addEventListener("click", count)
clearDOM.addEventListener("click", clean)
console.log(increaseDOM)

function submitForm(e){
    e.preventDefault()
    console.log("default islem iptali gerceklesmistir.")
    let scoreInput = document.querySelector("#score")
    console.log(scoreInput.value)
    localStorage.setItem("score",scoreInput.value)
}

function count(){
    this.id == "increase" ? counter += 1 : counter -=1
    counterDOM.innerHTML = counter
    localStorage.setItem("counter", counter)
}

function clean(){
    localStorage.clear();
    console.log("temizlendi")
    counter = 0
    counterDOM.innerHTML = counter
    

}
