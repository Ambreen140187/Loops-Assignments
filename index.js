"use strict";
// cerat empty array of objects
let poetryBook = [];
// using for loop for lessonobject alternative status
for (let i = 1; i <= 12; i++) {
    let poetryname = `poetry  ${i}`;
    // alternative true/false status
    let poetrystatus = i % 2 === 0;
    //  create lesson obj in poetry book
    let lesson = { name: poetryname, status: poetrystatus };
    // add lesson obj in array
    poetryBook.push(lesson);
}
// print result
console.log(poetryBook);
