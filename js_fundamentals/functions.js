// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortune_teller(number, partners_name, geo , occupation)
{
	n = number;
	name = partners_name ; 
	place = geo ;
	job = occupation ; 
	alert("You will be a " + job + " in " + place + " , and married to " + name + " with "+ n+ " kids.");
}

fortune_teller(2, "stewie", "Africa", "Hotel manager");


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function age_calculator(b_year, c_year)
{
	current_year = c_year ;
	birth_year = b_year;
	age_1 = current_year - birth_year;
	age_2 = age_1 - 1;
 
	alert("They are either " + age_1 + " or " + age_2);
}

age_calculator(1988, 2013);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function lifetime_supply(age, amount)
{
	current_age = age;
	maximum_age = 80;
	amount_per_day = amount;
	amount_in_life = (maximum_age - current_age) * amount_per_day;

	alert("You will need " + amount_in_life + " to last you until the ripe old age of " + maximum_age);

}
 lifetime_supply(25,2);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(r)
{
	radius = r;
	circumference = 2 * 3.142 * radius;
	alert("The circumference is "+ circumference);
}

function calcArea(r)
{
	radius = r;
	alert("The area is " + area);
	area = 3.142 * Math.pow(radius,2)
}

calcCircumfrence(12)
calcArea(12)

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


