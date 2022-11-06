// Array of usernames and ages

let userNames = ["Jack","Lucas","Tom","Sally","Janice","Bill","Grant",
        "Connie", "Kim", "Natalie"]
let userAges = [32, 45, 14, 21, 45, 12, 16, 51, 9, 33]

// Creating a while loop for over and equal to 18
// that will not work.  All names appear regardless

let counter = 0;
while (counter < userAges.length) {
        if ([userAges] >= 18, [counter]){
                console.log(userNames[counter]);
        }
        counter = counter +1
}

// Creating a for loop for under 18 but it also does not work

for (let counter = 0; counter < userAges.length; counter++) {
        if ([userAges] < 18, [counter]) {
                console.log(userNames[counter]);
        }
}