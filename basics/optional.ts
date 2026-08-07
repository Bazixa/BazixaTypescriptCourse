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


let inputs = '';
const didProvideInput = inputs || false ;
const didProvideInput1 = inputs ?? false ;