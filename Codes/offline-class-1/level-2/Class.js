// const dog = {
//     name: "doggie",
//     legCount: 2,
//     speaks: "bhow bhow",
// };

// const cat = {
//     name: "cat",
//     legCount: 2,
//     speaks: "meow",
// };

// function printStr(animal) {
//     console.log(`animal ${animal["name"]} ${animal["speaks"]}`);
// }

// // Since it is getting logged inside a fn so no need to log it over here.
// (printStr(dog));
// (printStr(cat));

//===================================================================================

// legCount, speak, name
// class Animal {
//     constructor(name, legCount, speaks) {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
//     speak() {
//         console.log("hii there " + this.speaks);
//     }
// }

// let dog = new Animal("dog", 4, "bhow bhow"); // create object
// let cat = new Animal("cat", 4, "meow");
// dog.speak();   // call function on object

//=====================================================================================
// function calculateSum() {
//     let a = 0;
//     for (let i =0; i<100000000; i++){
//         a = a + i
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs);



// const currentDate = new Date();

// console.log("Time in milliseconds since 1970:", currentDate.getTime()); // epoch timestamp

// =====================================================================================================

// TO CALCULATE HOW MUCH TIME A FUNCTION TOOK TO COMPLETE A DATE.
// function calculateSum() {
//     let a = 0;
//     for (let i = 0; i < 1000000000; i++) {
//         a = a + i;
//     }
//     return a;
// }

// const beforeDate = new Date();
// const beforeTimeInMs = beforeDate.getTime();
// calculateSum();

// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs);

// ======================================================================================================

// CREATING A STOPWATCH 

//     function currentTimePrint() {
//         console.log(new Date().getTime());
//     }

// setInterval(currentTimePrint, 1000);

//--------------------------------------------------------------------------------------------------------
// let count = 0;
// const timerId = setInterval(() => {
//   // your repeated work here
//   console.log(`tick ${count + 1}`);

//   count += 1;
//   if (count >= 10) {
//     clearInterval(timerId);
//   }
// }, 1000); // runs every 1s

// JSON -> JAVASCRIPT OBJECT NOTATION. (full form of json)


// JSON.parse
// JSON.stringify
const user = {
    name: "Sujeet",
    gender: "male"
}

const finalString = JSON.stringify(user);
console.log(finalString);