// when we want to add opitonal parameters on function we re using ? 

function generateError(msg?: string){
    throw new Error('msg');
}

// we re saying its optional u can give an string or not
generateError();


// in this time we are saying the user can have role propertiy or not
type user = {
    name: string;
    age: number;
    role?:'admin' | 'guest'
}


let inputs = null; 
const didProvideInput = inputs || false ; // the || is checking for the some value if its null undefined it will be false but if its "" it will be string | false
const didProvideInput1 = inputs ?? false ; // the ?? is checking for the inputs's values is null or undefined then if its find this value the variable will be right side.