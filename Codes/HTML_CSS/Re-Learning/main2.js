// let person1 = "harkirat";
// let person2 = "raman";
// let person3 = "kirat";

// const personArray = ["harkirat", "raman", "sujeet"];
// // The above two equally suffies

// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// ======= PART II ========
// const ages = [21, 22, 23, 24, 25];
// const numberOfPeople = ages.length;
// for (let i = 0; i < numberOfPeople; i++) {
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
// }

// ======= LEARNING ABOUT OBJECTS ======
const personArray = ["Sujeet", "raman", "priya"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i<personArray.length; i++){
    if(genderArray[i] == "male") {
        console.log(personArray[i])
    }
}