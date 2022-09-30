let userName = prompt("Kullanici adi giriniz")
let info = document.querySelector("#info")

info.innerHTML = `${userName ? userName : "Kullanici adini giriniz"}`

