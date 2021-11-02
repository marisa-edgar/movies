function Tickets () {
  this.movies = {};
  this.currentId = 0;
}

Tickets.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
} 

Tickets.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Tickets.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
}

function Movie (title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
}

let tickets = new Tickets();
let movie1 = new Movie ("Expensivé Movie", "matinee", "allages");
tickets.addMovie(movie1);
//element.addMovie(movie1);

/*title
[expensivemovie]
[kidsmovie]
[maturemovie]

time
[matinee]
[evening]

age
[allages]
[18+]*/

/*function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

let contact1 = new Contact("Ada", "Lovelace", "503-555-1111");
let contact2 = new Contact("Grace", "Hopper", "503-555-0199");*/