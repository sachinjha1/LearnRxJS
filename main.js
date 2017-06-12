import {Observable} from 'rxjs';

let numbers = [1,2,3,5,7];
//Create Observable of stream of numbers
let source = Observable.from(numbers);

class MyObserver {
    next(value){
        console.log(`Value is ${value}`);
    }

    error(e){
        console.log(`Error is ${e}`);
    }

    complete(){
        console.log(`Observer is completed!!!`)
    }
}


//Subscribe to observable. Pass observer to handle streams of data coming from Observable
source.subscribe(new MyObserver());
//You can have multiple observers for a single observable
source.subscribe(new MyObserver());