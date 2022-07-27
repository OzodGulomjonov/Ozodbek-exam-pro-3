/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va (22)yosh kiritaman. 
 Va u menga returnida yangi array qaytaradi va 
 unda faqat 22 yoshga teng va undan kattalarni qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]

let userAge = prompt("iltimos yoshingizni kiriting !")

function ageGreaterThan(array, minAge) {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        if(minAge <= array[i].age) {
            newArray.push(array[i]);
        }
    }
    return console.log(newArray);

}

ageGreaterThan(users , userAge)


// ageGreaterThan(users, 22)

// // Result
// [
//     {
//         name: "Avazbek",
//         age: "25"
//     },
//     {
//         name: "O'ktam",
//         age: "22"
//     },
//     {
//         name: "Sarvar",
//         age: "27"
//     }
// ]


