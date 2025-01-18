"use strict";
// UYGA VAZIFA
// 1-topshiriq Ranglarni ifodalovchi enum yarating (Red, Green, Blue) va foydalanuvchi kiritgan rangga qarab mos xabarni qaytaruvchi funksiyani yozing.
// enum Colors {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue",
// }
// function getColorMessage(color: Colors): string {
//     switch (color) {
//         case Colors.Red:
//             return "Siz Qizil rangni tanladingiz!";
//         case Colors.Green:
//             return "Siz Yashil rangni tanladingiz!";
//         case Colors.Blue:
//             return "Siz Ko‘k rangni tanladingiz!";
//         default:
//             return "Noto‘g‘ri rang kiritildi.";
//     }
// } 
// const userColor: string = "Blue" // <=== shu erdan tanlanadi
//  console.log(getColorMessage(userColor as Colors));
// 2-topshiriq Car nomli interfeys yarating. U quyidagi xususiyatlarni o'z ichiga olsin: brand (string), model (string), year (number). Keyin ushbu interfeys asosida obyekt yarating va uni konsolga chiqaring.
// interface Car {
//     brand : string,
//      model : string, 
//      year : number
// }
// let car: Car = {
//     brand : "Mercedes Benz",
//     model : "Banan", 
//     year : 2017
// }
// console.log(car);
// 3-topshiriq Interfeysga ixtiyoriy (optional) xususiyat qo'shing (ownerName), keyin obyekt yarating va bu xususiyatni ixtiyoriy holda bering.
// interface Car {
//     brand : string,
//      model : string, 
//      year : number
//      owerName?: string
// }
// let carOwnerName: Car = {
//     brand : "Mercedes Benz",
//     model : "Banan", 
//     year : 2017,
//     owerName: "sjdsd"
// }
// let car: Car = {
//     brand : "Mercedes Benz",
//     model : "Banan", 
//     year : 2017
// }
// console.log(carOwnerName);
// console.log(car);
// 4-topshiriq Person va Employee interfeyslari yarating. Person ism va yoshni, Employee esa ish joyini saqlasin. Ushbu ikkisini birlashtiruvchi tip yarating va undan foydalangan holda obyekt yarating.
// interface Person {
//     name: string
//     age: number
// }
// interface Employee {
//     ishxona: string
// }
// type PersonEmployee = Person & Employee;
// const personEmployee: PersonEmployee = {
//     name: "Muhammadrasul",
//     age: 18,
//     ishxona: "Najot Ta`lim"
// }
// 5-topshiriq Ikkita bir-biriga zid interfeys yarating (Admin va User). Keyin ular uchun intersection tip yarating va qanday obyekt hosil qilishingiz mumkinligini ko'rsating.
// interface Admin {
//     role: string
//     arr: string[] 
// }
// interface User {
//     role:string
//     name: string
// }
// type AdminUser = Admin & User;
// const adminUser: AdminUser = {
//     role: "Admin",
//     name: "abdulaziz",
//     arr: ['salom','alik','nma gap']
// }
// console.log(adminUser);
// 6-topshiriq
// const numbers: number[] = [1, 2, 3, 4, 5];
// function doubleArrayElements(arr: number[]): number[] {
//   return arr.map((i: number) => i * 2);
// }
// const doubledNumbers: number[] = doubleArrayElements(numbers);
// console.log(doubledNumbers);
// 7-topshiriq Faqat satrlarni o'z ichiga oluvchi massiv yarating. Bu massivdan faqat uzunligi 5 dan katta bo'lgan satrlarni tanlab oluvchi funksiyani yozing.
// let arr : string[] = ["salomat" , "alik", "xop"];
// function test(arg: string[]) {
//     let res : string[] = []
//     for (const i of arg) {
//         if (i.length > 5) {
//          res.push(i)
//         }
//     }
//     return res
// }
// let javob : string[] = test(arr)
// console.log(javob);
// 8-topshiriq Foydalanuvchi haqida quyidagi ma'lumotlarni saqlovchi obyekt yarating: name, age, email. Keyin funksiyani yozib, foydalanuvchining barcha ma'lumotlarini konsolga chiqaring.
// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
//   const user: User = {
//     name: "Ali Valiyev",
//     age: 25,
//     email: "ali.valiyev@example.com",
//   };
//   function test(user:User) {
//     console.log(`${user.name}`);
//     console.log(`${user.age}`);
//     console.log(`${user.email}`);
//   }
//   test(user)
// 9-topshiriq Obyektdan kalitlar va qiymatlarni alohida massivlarga ajratuvchi funksiyani yozing.
// Tushunmadim
// 10-topshiriq Foydalanuvchidan ikki son qabul qilib, ularning yig'indisini qaytaruvchi funksiyani yozing.
// const num1: number = 5
// const num2: number = 7
// function test(a:number, b:number) {
//     let res = a+b
//     return res
// }
// let javob = test(num1,num2)
// console.log(javob);
// 11-topshiriq 
// QILOLMADIM
// 12-topshiriq Uchta qiymatni saqlovchi tuple yarating: birinchi qiymat ism (string), ikkinchi qiymat yosh (number), uchinchi qiymat email (string).
// tuple bu aniq olchamga va aniq tartib ga ega massiv!
// let test : [string, number, string];
// test = ["ali", 15, 'alimov']
// 13- topshiriq Tuple ichidagi elementlarni almashtiruvchi funksiyani yozing ([number, string] -> [string, number]).
// aniq tushunmadim
// 14-topshiriq any tipidan foydalanib massiv yarating. Bu massiv ichida raqamlar, satrlar va obyektlar bo'lsin. Keyin massivdagi faqat raqamlarni qaytaruvchi funksiyani yozing.
// let arr : any[] = [15, 11, "salomat", {name:"13"}]
// function test(arg:any) {
//     let res : any = ''
//     for (const i of arg) {
//         if (i >= 0) {
//             res += i
//         }
//     }
//     return res
// }
// let javob = test (arr);
// console.log(javob);
// 15-topshiriq Har qanday turdagi ma'lumotni qabul qiluvchi va faqat string turdagilarni qaytaruvchi funksiyani yozing.
// let arr : any[] = [15, 11, "salomat", {name:"13"}]
// function test(arg:any) {
//     let res : any = ''
//     for (const i of arg) {
//         if (i.length >= 0) {
//             res += i
//         }
//     }
//     return res
// }
// let javob = test (arr);
// console.log(javob);
// 16-topshiriq unknown turidan foydalangan holda foydalanuvchidan ma'lumot qabul qiluvchi va agar ma'lumot satr bo'lsa, uning uzunligini qaytaruvchi funksiyani yozing.
// let a : unknown = "salomat"
// function test(arg : unknown){
//     let res : number 
//     if (typeof arg === "string") {
//         res = arg.length
//     }else{
//         res = 0
//     }
//     return res
// }
// let javob = test(a)
// console.log(javob);