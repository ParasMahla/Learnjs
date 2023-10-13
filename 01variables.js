

const uid = "paras123";
var firstName = "Paras";
var lastName = "Choudhary";
var email = "parasmahla567@gmail.com";
var password = "889075745756";
var confirmPassword = "889075745756";
var homeCountry = "India";
var state = "Rajasthan";
var coursecount = 0;
isLogggedInFromGoogle = "false";
isLoggedInFromInstagram = "true";

console.log(uid);
console.log(firstName);
console.log(lastName);
console.log(email);
console.log(password);


console.log(`
    unique id is:${uid};
    first name is:${firstName};
    last name is:${lastName};
    email:${email};
    Password:${password};
    confirm  Password:${confirmPassword};
    Home country :${homeCountry};
    Home state: ${state};
    Is logged in from Google: ${isLogggedInFromGoogle};
    Is Logged in from Instagram: ${isLoggedInFromInstagram};
`);

console.log("First name is:" +firstName)

// very important code , that if we consider first 2 as a string
// it would display 22 and when we use the minus sign then it would display
//"0" the number is only work as a string when we use the "+"sign except "+"sign all the 
//other operators are work normaly even in the string format.
var a = "2";
var b = 2;
var c = (a+b);
console.log(typeof c);
//output = 22

