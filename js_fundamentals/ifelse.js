// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2)
{
	if (num1 > num2){
		document.write(num1 + " is greater than " + num2);
	}else if (num2 > num1){
		document.write(num2 + " is greater than " + num1);
	}else{
		document.write(num1 + " is equal to " + num2);
	}
}

greaterNum(5,10);
greaterNum(3,3);
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function hello(lang_code)
{
	if (lang_code == "en"){
		document.write("Hello World. ");
	}else if (lang_code == "de"){
		document.write("Halo Welt. ");
	}else if (lang_code == "ar"){
		document.write("Ahlan ya 3alam. ");
	}else{
		document.write("Hello World. ");
	}
}
hello("en");
hello("de");
hello("ar");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function assignGrade(noun, number)
{
	if (number > 1){
		document.write(number + " " + noun + "s");
	}else{
		document.write(number + " " + noun);
	}
}
assignGrade("dog", 1);

assignGrade("cat", 3);

