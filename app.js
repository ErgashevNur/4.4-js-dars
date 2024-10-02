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

// E.x1
// let n = prompt("Son kiriting");

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// E.x2
// let i = 1;

// for (let n = prompt("Son kiriting"); n >= i; n--) {
//   console.log(n);
// }

// E.x3
// let n = prompt("Son kiriting");
// let num = 0;

// for (let i = 1; i <= n; i++) {
//   num += i;
// }
// console.log(num);

// E.x4
// let n = prompt("Son kiriting");
// let box = [];

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// E.x5
// let n = prompt("Son kiriting");
// let box = [];

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// E.x6
// let n = prompt("Son kiriting");
// let box = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// E.x7
// let n = prompt("Son kiriting");
// let box = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     box += i;
//     console.log(i);
//   }
// }
// console.log(box, "Bu javoblar yeg'inidis");

// E.x8
// let son = prompt("Son kiriting");

// for (let i = 0; i <= son; i++) {
//   if (son % 2 == 0) {
//     console.log(son, "Bu son tub son emas");
//   } else if (son % 2 == 1) {
//     console.log(son, "Bu son tub son");
//   }
// }

// for1
// let k = prompt("Son kiriting");
// let n = parseInt(prompt("Yana son kiriting"));

// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// for2
// let a = parseInt(prompt("Son kiriting:"));
// let b = parseInt(prompt("Son kiriting:"));

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// for3
// let a = parseInt(prompt("Son kiriting:"));
// let b = parseInt(prompt("Son kiriting:"));

// for (let i = a; i < b; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// for4
// let narx = prompt("Shokolat narxi");
// let suma = [];
// for (let i = 1; i <= 10; i++) {
//   suma = narx * i;
//   console.log(suma);
// }

// for5
// let narx = prompt("Shokolat narxi");
// let suma = [];
// for (let i = 0.1; i <= 1; i += 0.1) {
//   suma = narx * i;
//   console.log(Math.round(suma));
// }

// for 6
// let narx = prompt("Shokolat narxi");
// let suma = [];
// for (let i = 1; i <= 2; i += 0.1) {
//   suma = narx * i;
//   console.log(Math.round(suma));
// }

// for7
// let a = parseInt(prompt("a sonini kiriting:"));
// let b = parseInt(prompt("b sonini kiriting:"));
// let all = 0;

// for (let i = a; i <= b; i++) {
//   all += i;
// }
// console.log(all);

// for8
// let a = parseInt(prompt("a sonini kiriting:"));
// let b = parseInt(prompt("b sonini kiriting:"));
// let all = 1;

// for (let i = a; i <= b; i++) {
//   all *= i;
// }
// console.log(all);

// for9
// let a = parseInt(prompt("a sonini kiriting:"));
// let b = parseInt(prompt("b sonini kiriting:"));
// let all = 1;

// for (let i = a; i <= b; i++) {
//   all = i * i;
// }
// console.log(all);

// for10
// let n = parseInt(prompt("Son kiriting:"));
// let all = 0;

// for (let i = 1; i <= n; i++) {
//   all += 1 / i;
// }
// console.log("s=", all);

// for11
// let n = parseInt(prompt("Son kiriting"));
// let all = 0;

// for (let i = n; i <= 2 * n; i++) {
//   all += i * i;
// }
// console.log("s=", all);

// for12
let n = parseInt(prompt("Son Kiriting"));
let all = 1;

for (let i = 1.1; i <= n; i += 0.1) {
  all *= i;
}
console.log(all);
