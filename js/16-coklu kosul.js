let username = prompt("isminiz: ")
let age = prompt("yasiniz: " )
let info = document.querySelector("#info")

if(username && age >=18){
    info.innerHTML = "Ehliyet alabilirsiniz..."
} else if(username && age<18){
    info.innerHTML = "Malesef ehliyet alamazsiniz..."
} else if(!username ){
    info.innerHTML = "kullanci adi girmediniz..."
} else if (isNaN(age)){
    info.innerHTML = "ltfen bir sayi giriniz..."
}