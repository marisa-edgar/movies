/*function Tickets() {
  this.movies = {};
  this.currentId = 0;
}

Tickets.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Tickets.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
} 

Tickets.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
}*/

function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
}
//Base Price : 10(senior/child 8) Matinee Price: 7(senior/child 5)
Ticket.prototype.modifyCost = function() {
  let price = 10;
  if (this.title === "expensive") {
    price += 5;
  } else {
    price;
  }

  if (this.time === "evening") {
    price;
  } else if (this.time === "matinee") {
    price -= 3;
  }

  if (this.age === "child" || this.age === "senior") {
    price -= 2;
  } else {
    price;
  }
  return price;
};

//let movie1 = new Movie ("Expensivé Movie", "matinee", "allages")

let ticket1 = new Ticket ("expensive", "evening", "child");
let ticket2 = new Ticket ("Innapropriate Movie", "matinee", "adult");
let ticket3 = new Ticket ("Everyone Movie", "matinee", "senior");
let ticket4 = new Ticket ("Action Movie", "evening", "adult");

$("form#movie-select").submit(function(event) {
  event.preventDefault();
  let movieTitle = $("input:radio[name=title]:checked").val();
  let movieTime = $("input:radio[name=time]:checked").val();
  let movieAge = $("input:radio[name=age]:checked").val();
  let userTicket = new Ticket(movieTitle, movieTime, movieAge);

  $("#movie-select").hide();
});

//let tickets = new Tickets();

// tickets.addMovie(movie1);
// tickets.addMovie(movie2);
// tickets.addMovie(movie3);
// tickets.addMovie(movie4);

//function modifyCost()



/*START with Age. Reveal movies revelant to user input.


//tickets.findMovie(1);




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
