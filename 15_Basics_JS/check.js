// 1.
// var age=prompt("What is your age? ")
// if(age<18)
// {
//     console.log("You are minor");
// }
// else if(age>18 && age<60){
//     console.log("You are an adult");
// }
// else{
//     console.log("You are a senior citizen.");
// }


// 2.

// var num1=prompt("Enter num1")
// var num2=prompt("Enter num2")

// var num3=num1+num2
// if(num3%2===0)
// {
//     console.log("EvenSum")
// }
// else {
//     console.log("OddSum")
// }


// 3.

// var char=prompt("Give a single charecter")
// if(char>'A' && char<'Z ')
// {
//     console.log("Uppercase")
// }
// else{
//     console.log("Lower case")
// }


// 8.

// var namee=prompt("Enter your name")
// var time=prompt("Enter time")

// if(time>=5 && time<=12)
// {
//     console.log("Good Morning " + namee)
// }
// else if(time>12 && time<=17)
// {
//     console.log("Good AfterNoon "+namee)
// }
// else if(time>17 && time<=21)
// {
//     console.log("Good Evening "+ namee)
// }
// else if(time>21 && time<=24 || time>=1 &&time<5)
// {
//     console.log("Good Night "+namee)
// }

// 12. 
// var password=12345

// var check =Number(prompt("Enter your pass"))

// if(check === password)
// {
//     console.log("Matched the password")
// }
// else{
//     console.log("Password incorrect")
// }


// 16.

var num=123
console.log(num)
var rev=""
while(num)
{
    rev=rev+(num%10);
    num=Math.floor(num/10);
}
console.log(Number(rev))