// Template Literas

let username ="baris.menderes"
const DOMAIN ="autoliv.com"

let email = username +  "@" + DOMAIN

let info = `Merhaba ${username} sitemize hos geldin.. 
mail adresin ${email}

kisa isimiz ${username[0]}.

mail adresinin uzunlugu ${email.length}
borcunuz: ${(2+3)} TL
gunun saat bilgisi : ${new Date().getHours()}`
console.log(info)
