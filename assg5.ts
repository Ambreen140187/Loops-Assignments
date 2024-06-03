let myArray: string[] = []
for (let i=0; i<10; i++) {
    myArray.push(`Value-${i+1}`)
}

// console.log(myArray)
console.log("\n\tUsing For Loop")
console.log("-----------------------------")
console.log(" INDEX           VALUE")
for (let i=0; i<myArray.length; i++) {
    console.log("   " + i + "\t\t" + myArray[i])
}