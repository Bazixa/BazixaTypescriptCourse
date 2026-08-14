// we can give type to an array like this
let hobbies: string[] = ['Sports', 'Cooking', 'Reading'];


// for example, if we want to create union array, we can do it like this
let multiTypeArray: (string | number)[] = ['Sports', 10, 'Cooking', 20, 'Reading', 30];
//or we can do it like this
let multiTypeArray2: Array<string | number> = ['Sports', 10, 'Cooking', 20, 'Reading', 30];

// we can add objects to an array like this
let users: { name: string; age: number }[] = [
    { name: 'Kemal', age: 30 },
    { name: 'Bazixa', age: 25 }
];  
// or 
hobbies.push('Traveling');
users.push({ name: 'John', age: 35 });
