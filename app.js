// // Arrays -- massivlar
// let tashrifchi = prompt("Ismingizni kiriting");
// let m1 = "Ahror";
// let m2 = "MuhammadNurulloh";
// let m3 = "Dadaxon";
// let m4 = "Behzod";
// let m5 = "Muhammadqodir";
// let m6 = "Asror";
// let m7 = "Muhammadali";
// let m8 = "Asad";
// let m9 = "Bexruz";
// let m10 = "Sallohiddin";
// const mehmonlar = [
//   "Ahror",
//   "MuhammadNurulloh",
//   "Dadaxon",
//   "Behzod",
//   "Muhammadqodir",
//   "Asror",
//   "Muhammadali",
//   "Asad",
//   "Bexruz",
//   "Sallohiddin",
// ];

// if (mehmonlar.includes(tashrifchi)) {
//   console.log(`${tashrifchi} ro'yxatda bor!`);
// } else {
//   console.log(`${tashrifchi} ro'yxatda yo'q!`);
// }

// =>

// Uyga vazifa

// for1
// let n = prompt("Son kiriting");

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// for2
// let i = 1;

// for (let n = prompt("Son kiriting"); n >= i; n--) {
//   console.log(n);
// }

// for3
// let n = prompt("Son kiriting");
// let num = 0;

// for (let i = 1; i <= n; i++) {
//   num += i;
// }
// console.log(num);

// for4
// let n = prompt("Son kiriting");
// let box = [];

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for5
// let n = prompt("Son kiriting");
// let box = [];

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// for6
// let n = prompt("Son kiriting");
// let box = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     box += i;
//     console.log(i);
//   }
// }
// console.log(box, "Bu javoblar yeg'inidis");

// for7
// let son = prompt("Son kiriting");

// for (let i = 0; i <= son; i++) {
//   if (son % 2 == 0) {
//     console.log(son, "Bu son tub son emas");
//   } else if (son % 2 == 1) {
//     console.log(son, "Bu son tub son");
//   }
// }

// for8
let k = prompt("Son kiriting");
let n = parseInt(prompt("Yana son kiriting"));

if (n > 0) {
  for (let i = 0; i <= n; i++) {
    console.log(k);
  }
} else {
  console.log("Ikkinchi kiritgan soningiz 0 dan katta bo'lishi kerak");
}
