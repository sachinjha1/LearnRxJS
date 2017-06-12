import {Observable} from 'rxjs';

let numbers = [1,2,3,5,7];
//Create Observable of stream of numbers
let source = Observable.from(numbers);



source.subscribe(
    value => console.log(`Value is ${value}`),
    e => console.log(`Error is ${e}`),
    () => console.log(`Observer is completed!!!`)
);