
// **** Number veri tanimlama *********
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;

console.log(
    "fiyat:" , price , 
    " KDV orani:" , tax , 
    " KDV tutari:" , priceTax ,
    " Toplam Fiyat:", total
    );
    
// arttirma ve azaltma islemleri
let counter = 320;
counter = counter + 1;
counter += 1;
counter ++;
console.log(counter);

counter --;
console.log(counter);

counter *= 10;
console.log(counter);

// islem oncelegi:

console.log( 2 + 3 *10);

// mod (kalan alma) % :
// sayi tek mi cift mi ??
console.log(15 % 2 ); // 1 kalirsa tek sayi
console.log(30 % 2 ); // 0 kalirsa cift sayi

//8 urun alan koliye tum urunler sigiyor mu ?
console.log(567 % 8);


// us alma islemi :
console.log(2 ** 6);

//asagi yuvarlama islemi - > math.floor;
console.log("Asagi yuvarlama 1.7:" , Math.floor(1.7));

//yukari yuvarlama -> math.ceil;
console.log("Yukari yuvarlama 1.7:" , Math.ceil(1.7));
// yakina yuvarlama
console.log("yakina yuvarlama 1.3:" , Math.round(1.3));
console.log("yakina yuvarlama 1.6:" , Math.round(1.6));