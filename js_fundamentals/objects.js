// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
	title: "Mole",
	servings: 2,
	ingredients: ["cinnamon", "cumin", "cocoa"]
}

document.write(recipe.title + "\n");
document.write(recipe.servings + "\n");
for (i=0; i< recipe.ingredients.length ; i++){
	document.write(recipe.ingredients[i] + "\n");
}


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movie = {
	title:"Snatch", 
	duration: "2 hours",
	stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro", "Vinnie Jones"]
	print_movie: function() {
		console.log(title +" lasts for "+ duration +"Stars: ");
		for(i=0; i< stars.length;i++){
			console.log(stars[i] + ",");
		}
	}
}

movie.print_movie;

///////////////////////////////////Cris's solution 
var movie = {
	name: "5th Element",
	duration: "140",
	stars: ["Bruce Willis","Mila Jovovic", "Gary Oldman"]
} 

$(document).ready(function(){
	var result = movie.name + " lasts "+ movie.duration + " minutes. Stars: " ;
	result = result + movie.stars.join(", ");
	$("p").text(result);
})

