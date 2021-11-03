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
  this.price = 10;
}
//Base Price : 10(senior/child 8) Matinee Price: 7(senior/child 5)
Ticket.prototype.modifyCost = function() {
  if (this.title === "Expensive Movie") {
    this.price += 5;
  } else {
    this.price;
  }
  
 
  if (this.time === "Matinee") {
    this.price -= 3;
  } else {
    this.price;
  }

  if (this.age === "Child" || this.age === "Senior") {
    this.price -= 2;
  } else {
    this.price;
  }
  return this.price;
};

function showTitleAndPrice(userTicket) {
  //console.log(userTicket)
  $("#ticket-stub").show();
  $(".title").html(userTicket.title);
  $(".time").html(userTicket.time);
  $(".age").html(userTicket.age);
  $(".cost").html(userTicket.price);
}


$(document).ready(function(){
  $("form#movie-select").submit(function(event) {
    event.preventDefault();
    let movieTitle = $("input:radio[name=title]:checked").val();
    let movieTime = $("input:radio[name=time]:checked").val();
    let movieAge = $("input:radio[name=age]:checked").val();
    $("input:radio[name=title]:checked").val("");
    $("input:radio[name=time]:checked").val("");
    $("input:radio[name=age]:checked").val("");
    let userTicket = new Ticket(movieTitle, movieTime, movieAge);
    userTicket.modifyCost();
    showTitleAndPrice(userTicket);
    $("#movie-select").hide();
  });
})


//let tickets = new Tickets();

// tickets.addMovie(movie1);
// tickets.addMovie(movie2);
// tickets.addMovie(movie3);
// tickets.addMovie(movie4);

//function modifyCost()


//tickets.findMovie(1);




//element.addMovie(movie1);