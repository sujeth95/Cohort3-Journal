const axios = require("axios");

//FETCH SYNTAX
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "PUT"
//     });
//     const json = await response.json();
//     console.log(json.length);
// }

//AXIOS SYNTAX
//Change request method
//send body
//send headers
async function main() {
    const response = await axios.get("https://httpdump.app/dumps/76396b93-d34d-4cd9-8a02-2c17091614ee", {
        username: "Sujeet",
        password: "12345",
    },
    {
        headers: {
            Authorization: "Bearer 123",
        }
    });

    console.log(response.data.length);
}

main();