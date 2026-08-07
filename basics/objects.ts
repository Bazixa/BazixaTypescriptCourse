// the difference between the objects and arrays is that the objects have key-value pairs, while the arrays have only values
// we can create objects in typescript, which is a collection of key-value pairs
let myUsers: { name: string; age: number; isLoggedIn: boolean } = {
    name: 'Kemal',
    age: 30,
    isLoggedIn: true
};

// we don't have to define the type of the object, typescript can infer the type of the object
let myUsers2 = {
    name: 'Bazixa',
    age: 25,
    isLoggedIn: false
};

// it can be object inside an object, we can create nested objects in typescript
let myUsers3: { name: string; age: number; isLoggedIn: boolean; address: { city: string; country: string } ; hobbies: string[] } = {
    name: 'John',  
    age: 35,
    isLoggedIn: true,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['Sports', 'Cooking', 'Reading']
}


// so we create myUsers4 variable with type of object that can be null, and we can assign null to it, but we can't assign undefined to it
let myUsers4: { name: string; age: number; isLoggedIn: boolean } | null = null;
myUsers4 = {
    name: 'Jane',
    age: 28,
    isLoggedIn: true
};

// we can also create an object that can be undefined, but we can't assign null to it
let myUsers5: { name: string; age: number; isLoggedIn: boolean } | undefined = undefined;
myUsers5 = {
    name: 'Mike',
    age: 40,
    isLoggedIn: false
};

// It's any value that is not null or undefined, we can use the type {} to define an object that can have any value except null or undefined
let val: {} = 'some text'; 



// and we have record type in typescript, Sometimes we want to create an object with dynamic keys and values, so we use for this record type. 
let myUsers6: Record<string, string | number | boolean> = {
    name: 'Kemal',
    age: 30,
    isLoggedIn: true
};