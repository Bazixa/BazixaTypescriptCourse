// created summary by AI 

/*
============================================================
TypeScript Operators & Type Syntax
============================================================

These are TypeScript-specific operators and syntax.
Most of them exist only during compilation and are
removed from the generated JavaScript.
*/


/*============================================================
1. as (Type Assertion)
============================================================*/
// Tells TypeScript to treat a value as another type.
// Does NOT convert the value at runtime.
// Compile-time only.

const value: unknown = "Hello";

const text = value as string;

console.log(text.toUpperCase());


/*============================================================
2. <Type> (Type Assertion)
============================================================*/
// Same as "as".
// Avoid using it in React (.tsx)
// because it conflicts with JSX syntax.

const value2: unknown = "World";

const text2 = <string>value2;

console.log(text2.toUpperCase());


/*============================================================
3. Non-null Assertion (!)
============================================================*/
// Removes null and undefined from the type.
// Use only when you are certain the value exists.
// No runtime safety is added.

const button = document.getElementById("btn")!;

button.innerHTML = "Clicked";


/*============================================================
4. Definite Assignment Assertion (!)
============================================================*/
// Tells TypeScript the property
// will definitely be assigned later.

class User {

    name!: string;

    constructor() {
        this.name = "John";
    }

}

const user = new User();

console.log(user.name);


/*============================================================
5. satisfies
============================================================*/
// Checks whether an object satisfies a type
// while preserving its inferred type.

type Person = {
    name: string;
    age: number;
};

const person = {
    name: "Alice",
    age: 30,
} satisfies Person;

console.log(person.name);


/*============================================================
6. keyof
============================================================*/
// Produces a union of property names.

type Employee = {
    id: number;
    name: string;
    salary: number;
};

type EmployeeKeys = keyof Employee;

// Result:
// "id" | "name" | "salary"


/*============================================================
7. typeof (Type Position)
============================================================*/
// Creates a type from an existing variable.
// Different from JavaScript's runtime typeof.

const config = {
    host: "localhost",
    port: 3000,
};

type Config = typeof config;


/*============================================================
8. infer
============================================================*/
// Extracts a type inside conditional types.

type ReturnTypeOf<T> =
    T extends (...args: any[]) => infer R
        ? R
        : never;

function getName() {
    return "John";
}

type Name = ReturnTypeOf<typeof getName>;

// Result:
// string


/*============================================================
9. extends (Generic Constraint)
============================================================*/
// Restricts generic types.

function print<T extends string>(value: T) {
    console.log(value);
}

print("Hello");

// print(123); ❌ Error


/*============================================================
10. Indexed Access Type (T[K])
============================================================*/
// Accesses the type of a property.

type Product = {
    id: number;
    name: string;
    price: number;
};

type ProductName = Product["name"];

// Result:
// string


/*============================================================
11. Indexed Access with keyof
============================================================*/
// Gets the type of any property dynamically.

type ProductValue = Product[keyof Product];

// Result:
// number | string


/*============================================================
12. in (Mapped Types)
============================================================*/
// Iterates over property names
// when creating new types.

type ReadOnlyProduct = {

    readonly [K in keyof Product]: Product[K];

};


/*============================================================
13. is (Type Predicate)
============================================================*/
// Used for custom type guards.

function isString(value: unknown): value is string {

    return typeof value === "string";

}

const input: unknown = "TypeScript";

if (isString(input)) {

    console.log(input.toUpperCase());

}


/*============================================================
14. asserts
============================================================*/
// Narrows a type by throwing an error
// if the condition is not satisfied.

function assertString(value: unknown): asserts value is string {

    if (typeof value !== "string") {

        throw new Error("Not a string");

    }

}

const username: unknown = "John";

assertString(username);

console.log(username.toUpperCase());


/*============================================================
15. Template Literal Types
============================================================*/
// Builds new string literal types.

type Size = "sm" | "md" | "lg";

type CssClass = `btn-${Size}`;

// Result:
// "btn-sm"
// "btn-md"
// "btn-lg"


/*============================================================
16. Conditional Types
============================================================*/
// Similar to a ternary operator for types.

type IsString<T> =
    T extends string
        ? true
        : false;

type A = IsString<string>; // true
type B = IsString<number>; // false


/*============================================================
17. Utility with keyof + typeof
============================================================*/
// A common real-world pattern.

const colors = {
    primary: "#000",
    secondary: "#fff",
    danger: "#f00",
};

type ColorName = keyof typeof colors;

// Result:
// "primary" | "secondary" | "danger"


/*============================================================
18. Readonly
============================================================*/
// Prevents reassignment.

type Car = {

    readonly brand: string;

};

const car: Car = {

    brand: "BMW",

};

// car.brand = "Audi"; ❌ Error


/*============================================================
19. Optional Property (?)
============================================================*/
// Property may be undefined.

type Account = {

    username: string;
    email?: string;

};


/*============================================================
20. Optional Chaining (?.)
============================================================*/
// JavaScript feature fully supported by TypeScript.
// Safely accesses nested properties.

const profile = {

    address: {

        city: "London",

    }

};

console.log(profile.address?.city);


/*============================================================
21. Nullish Coalescing (??)
============================================================*/
// JavaScript operator.
// Falls back only for null or undefined.

const namex = null ??"Guest";

console.log(namex); // ""


/*============================================================
22. Non-null + Optional Chaining
============================================================*/
// Often used together.

const inputElement =
    document.querySelector("input")!;

inputElement.focus();


/*============================================================
Summary
============================================================

Compile-time only:

✔ as
✔ <Type>
✔ keyof
✔ infer
✔ extends
✔ satisfies
✔ typeof (type)
✔ T[K]
✔ in
✔ is
✔ asserts
✔ Conditional Types
✔ Template Literal Types

Runtime JavaScript operators:

✔ !
✔ ?.
✔ ??
✔ ||
✔ &&
✔ ?:
✔ ===
✔ !==
✔ typeof

============================================================*/