// think about we have a user-name id in html, and we want to get the value of this input field in typescript, so we can do it like this
const inputEl = document.getElementById('user-name');

// when we look inputEl types with mouse hover, we can see that the type HTMLElement | null

// or with if
if (!inputEl) {
    // this meaning that inputEl is null, so we can throw an error or return from the function
    throw new Error('Element not found');
}
// in this time we re using "?" and its meaning if inputEl is null dont look at the value. 
// this is the short way for the looking for null value but when we use short way we cannot look or do for error or something 
// console.log(inputEl?.value); 

// console.log(inputEl.value); // when we look inputEl types with mouse hover here, we can see that the type is only HTMLelement 
// or we can define in variables too
const inputEl3 = document.getElementById('user-name')!; // its meaning that we are sure that this element is not null
// console.log(inputEl3!.value); // we can used it here too but we re taking error because value does not exist on type HTMLElement
// but we re taking error value does not exist on type HTMLElement and we can fix this like
// so we can use type assertion to tell typescript that this element is an HTMLInputElement, this is the secure way to access input elemnt on html
const inputEl2 = document.getElementById('user-name') as HTMLInputElement | null;
// if we  use inputEl2 it will be possible null value error so instead of this we re using inputEl2?
// console.log(inputEl2?.value); // here we used ? for looking for the value is null or not. or this
if (!inputEl2){
    throw new Error('element not found')
}
// then
console.log(inputEl2.value) // it can be give and error because we checkhed null with if here 