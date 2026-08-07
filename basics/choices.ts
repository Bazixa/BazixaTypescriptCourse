// sometimes we need to make a choice in our code , for example we want to check if a user is admin or not, we can do it like this
// 0 => admin, 1 => user, 2 => guest   
// we re using enum to make a choice in our code, we can use enum to define a set of named constants, and we can use it to make a choice in our code
enum Role {
    Admin = 0, // we dont need to write 0, 1, 2, because typescript will automatically assing the values to the enum.
    User = 1,
    Guest = 2
}

// now we can use the enum as a type for our variable, and we can assign the value of the enum to our variable
let userRole2: Role = Role.Admin; // we can assign the value of the enum to our variable


// sometimes if we want to make a choice we can use union types, for example we want to check if a user is admin or not, we can do it like this
// and its literal type, which means we can assign only the values that we defined in the union type to our variable
let userRole: 'admin' | 'user' | 'guest'; // we can use union types to define a set of named constants


// we can create a type definition for our union type, and we can use it to make a choice in our code
type CustomType = 'admin' | 'user' | 'guest';

// now we have custom type definition for our union type, and we can use it to make a choice in our code
let userRole3: CustomType = 'admin'; // we can assign the value of the union type to our variable

// we can define a type in type alias, and we can use it to make a choice in our code
type CustomType2 = {
    userName: string;
    userRole: 'admin' | 'user' | 'guest';
}

// and we can use this type in function

function access (role: CustomType2) {
    if (role.userRole === 'admin') {
        console.log(`${role.userName} is an admin`);
    } else if (role.userRole === 'user') {
        console.log(`${role.userName} is a user`);
    } else {
        console.log(`${role.userName} is a guest`);
    }
    //....
}