import {Observable} from 'rxjs';

let circle = document.getElementById('circle');

//Observable takes function as parameter that is observer
let source = Observable.fromEvent(document, 'mousemove')
    .map(e => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }).filter(value => value.x <500).delay(200);

    //.map(n => n*2)
    // .filter(n => n > 0);


function doNext(value){
    console.log(value);
    circle.style.left=value.x+"px";
    circle.style.top=value.y+"px";
}

source.subscribe(
    doNext,
    e => console.log(`Error is ${e}`),
    () => console.log(`Observer is completed!!!`)
);