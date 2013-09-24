// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

function fortune_teller()
{
	n = 4;
	name = "Stewie" ; 
	place = "Hawaii";
	job = "secretary" ; 
	alert("You will be a " + job + " in " + place + " , and married to " + name + " with "+ n+ " kids.");
}

fortune_teller();

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

function age_calculator()
{
	current_year = 2013;
	birth_year = 1988;
	age_1 = 2013 - 1988;
	age_2 = age_1 - 1;
 
	alert("They are either " + age_1 + " or " + age_2);
}

age_calculator();

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

function lifetime_supply()
{
	current_age = 25;
	maximum_age = 80;
	amount_per_day = 2;
	amount_in_life = (maximum_age - current_age) * amount_per_day;

	alert("You will need " + amount_in_life + " to last you until the ripe old age of " + maximum_age);

}
 lifetime_supply();

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

function geometrizer()
{
	radius = 4;
	circumference = 2 * 3.142 * radius;
	area = 3.142 * Math.pow(radius,2)

	alert("The circumference is "+ circumference);
	alert("The area is " + area);
}

geometrizer();

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function temperature_convertor()
{
	temp_celcius1 = 12;
	temp_fahr1 = temp_celcius1 * 9/5 + 32;
	alert(temp_celcius1 + " °C is " + temp_fahr1 + " °F");

	temp_fahr2 = 50;
	temp_celcius2 = (temp_fahr2 - 32) * 9/5;
	alert(temp_celcius2 + " °C is " + temp_fahr2 + " °F");
}

temperature_convertor();
