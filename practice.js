// const fun = (name, color) => {
//     const person = {
//         name : name,
//         color : color,
//         money: 100,
//         spend: 30,
//         left: function () {
//             return this.money - this.spend
//         }
//     }
//     const intro = `my name is ${person.name} and i like ${person.color} color shirt.And i left ${person.left()}rs money in my pocket.`
//     return intro
// }
// console.log(fun("Hitanshu", "blue"));

// const number = [1,2,3,4,5,6,6]
// res = []
// for (const num of number) {
//     res.push(num**2);
// }

// console.log(res);

// spread Operator ...
// let obj1 = {
//     "name"  :"Hitanshu",
//     "age": 34
// }

// let obj2 = {...obj1}
// obj1["age"] = 29

// console.log(obj1);
// console.log(obj2);


// let scorecard = {
//     "wickets": 3,
//     "score": 343,
//     "overs": 13.3
// }

// let espn_scorecard = {
// 	"wickets": 7,
// 	"score": 33,
// 	"overs": 23.3,
//     "players" : {
//         "virat": 35,
//         "faf" : 43
//     }
// }

// let total_scorecard = {
//     ...scorecard,...espn_scorecard // spread operator used in merging
// }

// console.log(total_scorecard);



let obj = {
    "user":{
        'fullname':'prantosh',
        'email':'sadf@gmail.com',
        'mobile':{
            'code':'+91',
            'number':'2432413141'
        }
    }
}
console.log(obj.user);




// acc = 50
// withdraw = 100

// if (withdraw > acc) {
//     console.error("Amount Insufficient");
// } else {
//     acc -= withdraw
//     console.log('Balance left:', acc);
// }

// function avgMarks(marks) {
// 	let sum = 0;
// 	for (let i = 0; i < marks.length; i++) {
// 		sum += marks[i];
// 	}
// 	console.log(sum / marks.length);
// }

// let marks = [1, 2, 3, 4, 5];

// avgMarks(marks);


// let getAreaShp = (shape) => {
//     switch (shape) {
//         case "circle" : return (
//             (r) => {
//             return 3.14 * r * r;
//         })
//         case "square" : return (
//             (side) => {
//                 return side * side
//             }
//             )
//         case "rectangle" : return (
//             (lenght,breadth) =>{
//                 return length * breadth
//             }
//         )
//     }
// }

// console.log(getAreaShp("circle")(100))