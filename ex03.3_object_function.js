let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
    fn: function(arg) {
        console.log(arg)
    } 
};
    
test.fn(123);
console.log(test.obj.x);
test.obj.y = 40;

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
    
console.log(point.x);	// -> 0
point.moveHorizontally(30);
console.log(point.x);	// -> 30
point.moveVertically(40);
console.log(point.y);	// -> 40