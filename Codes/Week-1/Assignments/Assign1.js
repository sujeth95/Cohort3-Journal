function greet(user){
    if(user2.gender == "Male" || user2.gender == "male"){
        console.log("Hii Mr " + user2.name + ", your age is: " + user2.age + ".");
    }
    else if(user2.gender == "Female" || user2.gender == "female"){
        console.log("Hii Mrs " + user2.name + ", your age is: " + user2.age + ".");
    }
    else {
        console.log("Hii Others " + user2.name + ", your age is: " + user2.age + ".");
    }

    if(user2.age >= 18){
        console.log("You can Vote.");
    }
    else if(user2.age < 18){
        console.log("You are a minor.");
    }
}

let user2 = {
    name: "Sujeet Oraon",
    age: 17,
    gender: "male"
}

greet(user2);