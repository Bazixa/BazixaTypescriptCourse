console.log("hello world");

// we can create a variable with let like var in go
let userName: string;
let userAge: number;
let isLoggedIn: boolean;


userName = 'Bazixa';
userAge = 30;
isLoggedIn = true;

// we can use variables with type in function too
function add(a: number, b: number): number {
    return a + b;
}

add(5, 10);
add(20, 30);


// we have any type in typescript, but we should avoid using it as much as possible
// we can use any type in real world when we don't know the type of variable, but we should avoid using it as much as possible
let randomValue: any;
randomValue = 10;
randomValue = 'Hello';
randomValue = true;
randomValue = { name: 'Bazixa', age: 30 };
randomValue = [1, 2, 3, 4, 5];


// we can use union types in typescript, which means we can use multiple types for a variable
let multiType: number | string; // It can be either number or string or more
multiType = 10;
multiType = 'Hello';
