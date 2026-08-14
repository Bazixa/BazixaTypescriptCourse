// null & undefined are two special types in typescript

let a: null;

a = null; // we can assign null to a variable of type null

// we can't assign undefined to a variable of type null
// a = undefined; // Error: Type 'undefined' is not assignable to type 'null'.

let b: undefined;

b = undefined; // we can assign undefined to a variable of type undefined

// b = null; // Error: Type 'null' is not assignable to type 'undefined'.

// the difference between null and undefined is that null is an assignment value,which means we can assign null to a variable, 
// while undefined is a type that means a variable has not been assigned a value yet.
// so null has no a value, while undefined means a variable has not been assigned a value yet.