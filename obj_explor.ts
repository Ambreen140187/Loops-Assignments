// // assigment no:4//


let myObject:any = {
    item1 : "Value Item 1",
    item2 : "Value Item 2",
    item3 : "Value Item 3",
}

for (let key in myObject) {
    console.log(key);
    console.log(key +" ," + myObject[key])
}
