// for (let i =1 ; i<=10; i++)
// {
//     console.log(2**i)
// }

// let result = 1;
// while(result <= 10)
// {
//     console.log(2**result)
//     result++;
// }

// let user;
// console.log(user)
// do{
//    user = prompt("what's your name?");
// }while(user.length === 1 || !isNaN(user))
// //isNaN() -- not a number

// alert(`Welcome ${user}`);

// let car ={
//     make:"mazda",
//     color:"silver",
//     year:"2010",
//     move: function(){console.log("I am moving")},
// };
// // console.log(car.make);

// for(let key in car)
// {
//     console.log(key,car[key]);
// }
// let random = ['tree', 698, [0,1,2]];
// console.log(random[20]);


let students = [
    {
      name: "Cristian",
      age: 30,
      location: "Vancouver",
    },
    {
      name: "James",
      age: 40,
      location: "Toronto",
    },
    {
      name: "Garry",
      age: 20,
      location: "Vancouver",
    },
  ];
  
  function findStudentsInVancouver() {
    // for (let i = 0 ; i<students.length ; i++)
    // {
    //     if (students[i].location === "Vancouver")
    //     {
    //         console.log(students[i]);
    //     }
    // }
    //   for (let stud of students) {
    //     if (stud.location === "Vancouver") {
    //       console.log(stud);
    //     }
    //   }
    students.forEach((stud) => {
      if (stud.location === "Vancouver") {
        console.log(stud);
      }
    });
  }
  
  findStudentsInVancouver();