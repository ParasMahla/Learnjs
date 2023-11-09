var temperature = 19;

if (temperature <= 20)
    {
        console.log("it's very cold outside");
}
if(temperature < 30)
    {
        console.log("it's moderate outside");
    }
else
    {
        console.log("it's really very Hot outside");
    }


//check wheather the number us even or odd.
    var n = 16;
    if(n%2==0)
    {
        console.log("\n the number is even");
    }
    else{
        console.log("\n The number is odd");
    }

//check wheather the year is leap or not.
    var year = 2020;
    if((year%400==0)||((year%100!=0)&&(year%4===0)))
    {
        console.log("\nThe year is leap year:");
    }
    else{
        console.log("\nThe year is not leap year:");
    }

    

    
    function calculateQuadraticRoots(a, b, c) {
  // Calculate the discriminant
  var discriminant = b * b - 4 * a * c;
  var roots = [];

  // Check if the discriminant is negative
  if (discriminant < 0) {
    roots.push("No real roots");
  } else if (discriminant === 0) {
    // If discriminant is zero, there is one real root
    var root = -b / (2 * a);
    roots.push("One real root: " + root);
  } else {
    // If discriminant is positive, there are two real roots
    var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push("Two real roots: " + root1 + " and " + root2);
  }

  return roots;
}

// Example usage:
var a = 1;
var b = -3;
var c = 2;
var result = calculateQuadraticRoots(a, b, c);
console.log(result);

//some complex examples//
var age = 11;
if(age > 18){
    console.log("\nyou are eligible for sex in india🤤");
}else if(age === 18){
    console.log("\nyou have to wait for 11 months and 31 more days for having sex😒");
}else {
    console.log("\nyou are not eligible for sex 🤡")
};

//using the OR "||"operator
// in OR || operator if any one condition is true it will run properly.

var licence = true;
var permit = false;
if(licence || permit){
    console.log("\nyou are allowed drive");
}else{
    console.log("\nyou are not allowed to drive")
};



var  chaddi = true;
var  bikini = true;
var baniyan = true;
var bra     = true;
if(chaddi || bikini || baniyan || bra){
    console.log("\nthey are allowed to enter ");
}else{
    console.log("\nSorry you are not allowed to enter")
};

//using the AND operator "&&"
//in AND operator all conditions must be true then after it will run successfully.

var paras = true;
var mohit = false;
var hitesh = true;
var chetan = true;
if(paras && mohit && hitesh && chetan){
    console.log("\nyou are allowed to hang out");
}else{
    console.log("\nyou are not allowed to hangout")
};




var x = 5;
var y = 10;
if(x > 0 && y > 0){
    console.log("\nBoth X and Y are positive");
}else{
    console.log("\nAtleast one of X or Y is not positive")
}; 