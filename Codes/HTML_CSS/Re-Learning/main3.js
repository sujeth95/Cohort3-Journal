// const personArray = ["harkirat", "raman", "priya"];
// const genderArray = ["male", "male", "female"];
// const numberofUsers = personArray.length;

// for (let i = 0; i < numberofUsers; i++) {
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]); 
//     }
// }

// ==== LEARNING ABOUT OBJECTS =====

// const users1 = {
//     firstName: "harkirat",
//     gender: "male"
// }

// console.log(users1.firstName);
// console.log(users1["firstName"]); // Both can be written to print from object

// ======================================================================================

const allUsers = [{
    firstName: "Sujeet",
    gender: "male"
}, {
    firstName: "raman",
    gender: "male",
    metadata: {
        age: 21,
        address: ""
    }
}, {
    firstName: "priya",
    gender: "female"
}]
    //COMPLEX LOGIC
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["metadata"]["age"] == "male") {
        console.log(allUsers[i]["firstName"])
    }
}