console.log("Hello World")
// var string = "this";
var string = 'thi"s';
var name1 = 'Harry';
var channel = 'CodeWithHarry';
var message = 'Harry is a good boy';
var temp = `${name1} is a 'nice' person "and" he has a channel called ${channel}`;
// console.log(string + name + message);
// console.log(temp);
// var len = name.length;
// console.log(`Length of name is ${len}`)

// console.log("Hello \\nworld\nHarry\tand");
var y = new String("this");
console.log(y);
var str = "This is a string";
console.log(str);

// First occurence of a substring
var position = str.indexOf('is');
console.log(position)

// Last occurence of a substring
position = str.lastIndexOf('is');
console.log(position)

// Substring from a string
// var substr = str.slice(1,7);
// var substr = str.substring(1,7);
var substr1 = str.substr(1,3);
console.log(substr1)

// var replaced = str.replace('string', 'Harry');
// console.log(str)
// console.log(replaced)

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// var newString = str.concat('New String')
// console.log(newString)
// var strWithWhitespaces = "   this contains        whitespaces   ";
// console.log(strWithWhitespaces)
// console.log(strWithWhitespaces.trim())

// var char2 = str.charAt(2);
// var char2 = str.charCodeAt(2); // Not very important
// console.log(char2)
// var string1 = "This is a string";
// var string1 = "This is a string2";
// console.log(string1);
// let a = "u";
// {
// let a = "u6";
// console.log(a)
// }
// console.log(a)

// const a = "This cannot be changed";
// a = "I want to change this. This cannot be changed";
// console.log(a);
// let age = 5;
// if(age>18){
//     console.log("You can drink water");
// }
// else if(age==2){
//     console.log("Age is 2")
// }
// else if(age==5){
//     console.log("Age is 5")
// }
// else{
//     console.log("You can drink Cold Drink");
// }

// const cups = 47; 
// switch (cups) {
//     case 4:
//         console.log("The value of cups is 4")
//         break;

//     case 41:
//         console.log("The value of cups is 41")
//         break;

//     case 42:
//         console.log("The value of cups is 42")
//         break;

//     case 43:
//         console.log("The value of cups is 43")
//         break;

//     default:
//         console.log("The value of cups is none of 4, 41, 42, 43")
//         break;
// }
let myVar = 34;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

// let employee = {
//     name: "Harry",
//     salary: 10,
//     channel: "CodeWithHarry",
//     "channel 2": "ProgrammingWithHarry",
// }
// console.log(employee);

// let names = [1, 2, 4, "Harry", undefined];
// let names = new Array(41, 2, 4, "Harry", undefined);
let names = new Array(23);
console.log(names.length);
names = names.sort();
names.push("this is pushed");
console.log(names);
console.log(str[3])
console.log("This is tutorial 53");

function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}


let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
// let returnVal = greet(name3);
// console.log(returnVal)

let returnVal = sum(1,2,3);
console.log(returnVal)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy"); 
// Alert in in-browser JavaScript - Does not return anything
        // alert("This is a message"); 

        // Prompt in JS
        // let name = prompt("What is your name?", "Guest");
        // console.log(name);

        // Confirm in JS
        let deletePost = confirm("Do you really want to delete this post?");
        
        // console.log(deletePost);
        if(deletePost){
            // Code to delete the post
            console.log("Your post has been deleted successfully");
        }
        else{
            // Code to cancel deletion of the post
            console.log("Your post has not been deleted");
        }
        console.log("This is tutorial 55");
        // let i = 0;
        // for(i=0; i<3;i++){
        //     console.log(i);
        // }
    
        let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
        // for (let index = 0; index < friends.length; index++) {
        //     console.log("Hello friend, " + friends[index]);
        // }
    
        // friends.forEach(function f(element){
        //     console.log("Hello Friend, " + element + " to modern JavaScript");
        // });
    
        // for (element of friends){
        //     console.log("Hello Friend, " + element + " to modern JavaScript again");
        // }
    
        let employee = {
            name: "Harry",
            salary: 2,
            channel: "CWH"
        }
    
        // Use this loop to iterate over objects in JavaScript
        for(key in employee){
            console.log(`The ${key} of employee is ${employee[key]}`);
        }
        
        // while loop in js
        let i =0;
        while(i<4){
            console.log(`${i} is less than 4`);
            i++;
        }
        
        // do while loop in js
        let j =34;
        do{
            console.log(`${j} is less than 4 and we are inside do while loop`);
            j++;
        }while(j<4);
    
        let main = document.getElementById('main');
        console.log(main);
        let nav = document.getElementById('nav');
        console.log(nav);

        let containers = document.getElementsByClassName('container');
        console.log(containers);

        // let sel = document.querySelector('#nav>li');
        // console.log("Selector returns ", sel)

        let sel = document.querySelectorAll('#nav>li');
        console.log("Selector returns ", sel)
document.getElementById("button").innerHTML = "<h3>Button is pressed</h3>";
