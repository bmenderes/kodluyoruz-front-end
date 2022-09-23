let email = "bmenderes@gmail.com"
let firstName = "Baris"
let lastName = "Menderes"

// string karkter satyisi
console.log(email.length)

//ilk karakter bulmak
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk harf
//firstName = firstName.toUpperCase()
//console.log(firstName)
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())

//string icerisinde bilgi arama -> search

console.log(email.search("@")) // eger aranan yok ise -1 doner
console.log(email[9])
console.log(email.slice(email.search("@") + 1).toUpperCase()) // Domain bilgisine ulastik