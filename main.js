import {Observable} from 'rxjs';

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/filter';

let numbers = [1,2,3,5,7];
//Observable takes function as parameter that is observer
let source = Observable.create(observer => {
    let index=0;

    let produceValue = () => {
        observer.next(numbers[index++]);

        if(index <numbers.length){
            setTimeout(produceValue, 2000);
        }else{
            observer.complete();
        }
    }

   produceValue();

}).map(n => n*2).filter(n => n > 0);




source.subscribe(
    value => console.log(`Value is ${value}`),
    e => console.log(`Error is ${e}`),
    () => console.log(`Observer is completed!!!`)
);