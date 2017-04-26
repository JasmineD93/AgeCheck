//Get age and convert it to a Number 
var age = Number(prompt("How old are you?"))

//If age is negative
if (age < 0) {
	console.log("You cannot be a negative age")
}

//If age is 21
else if (age === 21) {
	console.log("Happy 21st Birthday!")
}

//If age is odd
else if ((age % 2) !== 0){
	console.log("Your age is odd");
}


//If age is a perfect square
else if ((Math.sqrt(age) % 1) === 0 )
{
	console.log("Perfect Square!")
}

else {
	console.log("Nothing special about your age");
}