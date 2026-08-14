
// in this function add(we re writing here type of parameters):we re writing here type of return value{...}
function adds(a:number, b:number) :number{
    return a + b;
}



// void type is used when a function does not return any value.
// in this func we dont have the return value so we can use void type, which means this function does not return any value
function logMessage(message: string): void {
    console.log(message);
}


// never type is used when a function never returns, it always throws an error or never finishes executing.
function throwError(message: string): never {
    throw new Error(message);
}

/// the difference between void and never is that void means the function does not return any value, but it can finish executing,
// while never means the function never returns, it always throws an error or never finishes executing.
// so we can use void type when we want to define a function that does not return any value, but it can finish executing,
// and we can use never type when we want to define a function that never returns, it always throws an error or never finishes executing.
// we re using this because in real world example we can use void when we have some function with return value but we re creating another 
// function that's help our mainfunction to do some work, and we dont want to return any value from this function
// and we can use never when we have some function that always throws an error or never finishes executing, because if it finish executing
// we cant look for error, so we can use never type to define a function that never returns, it always throws an error or never finishes executing.



// we can also use function as a type
function multiply(a: number, b: number): number {
    return a * b;
}
function divide(a: number, b: number): number {
    return a / b;
}
function plus(a: number, b: number): number {
    return a + b;
}
function multiplyNumbers(a: number, b: number, functionType:(x:number,y:number) => number): number {
    return a+b+functionType(a, b);
}
// so we created a function multiplyNumbers that takes two numbers and a function as parameters, and returns a number.
// we can use this function like this
multiplyNumbers(5, 10, multiply); // it will return 65, because 5 + 10 + (5 * 10) = 65
multiplyNumbers(5, 10, divide); // it will return 15.5, because 5 + 10 + (5 / 10) = 15.5
multiplyNumbers(5, 10, plus); // it will return 30, because 5 + 10 + (5 + 10) = 30
// multiply:() => number or string we re using function as a type like this 
// in this example we re using function as a type, which means we can pass a function as a parameter to another function.
// => number is meaning that this function will return a number.  

// we can define a function type in type alias,  
type user = {
    name : string;
    age : number;
    greet: () => string; // we re using function as a type here, which means we can pass a function as a parameter to another function.
}

// we can use user type like this
let userGreet : user = {
    name: 'Bazixa',
    age: 30,
    greet: () => {
        return 'Hello, my name is ${this.name}';
    }
}


userGreet.greet(); // it will return "Hello, my name is Bazixa"