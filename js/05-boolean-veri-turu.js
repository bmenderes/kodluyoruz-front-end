// **** Boolean veri turu ******

// 0 ve 1 'i anlamak
let isActive = false; // 0 alan degler
isActive = true; // 1
console.log(isActive);

let userName;

let isUserName = Boolean(userName);
console.log(isUserName);

Boolean("11"); // Ture
Boolean(""); // False

userName = "Baris";
isUserName = Boolean(userName)
console.log(isUserName);

//0 , -0, null, false, NaN, undefined, ("") ->

var x = 10/'a';
console.log(Boolean(x));

var y="" || -2 || 'javaScript';
console.log(Boolean(y));

var z = {2:'js'};
console.log(Boolean(z));

var t = "" && -2 && 'javaScript';
console.log(Boolean(t));

var w = false ||0;
console.log(Boolean(w));

var a = true;
console.log(Boolean(a));