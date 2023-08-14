console.log("start");
var a=100;
let b=200;
console.log(a,b);
function onefunction(){
    let c=30;
    let d=40;
    function twofunction(){
        let e=50;
        console.log(c);
        console.log(d);
        function threefunction(){
            console.log(e);
        }
        return threefunction;
    }
    return twofunction;
}
onefunction()();