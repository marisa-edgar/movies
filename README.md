Describe: Movie()

Test: It should return an object with properties of title, time, and age
Code: movie1 = new Movie("Expensive Movie", "matinee", "allages");
      movie1.name;
Expected Output: "Expensive Movie" ~completed


Describe: Ticket()

Test: "It should add an id to each movie"
Code: movie1
Expected Output: Movie {title: Expensivé Movie", time: "matinee", age :"allages" id: 1} ~ completed

Test: "It should retreive a movie based off of the id"
code: tickets.findMovie(1)
expected output: ("title: Expensivé Movie", "time: matinee", "age: allages" "id: 1") 

Describe: modifyCost

Test: "It should manipulate price depending on user input"
Code: modifyCost
Expected Output: price != 10