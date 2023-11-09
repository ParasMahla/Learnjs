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
