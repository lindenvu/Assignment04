/*eslint-env browser*/
/*
//STEP 1
var movies = ["Rocky I", "Rocky II", "Rocky III", "Rocky IV", "Rocky V"];
window.console.log(movies[1]);
//STEP 2
var movies = new Array(5);
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
window.console.log(movies[0]);
//STEP 3
var movies = new Array(5);
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
window.console.log(movies.length);
//STEP 4
var movies =  [];
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
delete movies[0];
window.console.log(movies);
//STEP 5 
var movies =  [];
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
//STEP 6
var movies =  [];
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var i;
for (i in movies) {
        window.console.log(movies[i]);
}
//STEP 7
var movies =  [];
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
movies = movies.sort();
var i;
for (i in movies) {
        window.console.log(movies[i]);
}
//STEP 8
var movies =  [];
movies[0] = "Rocky I";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var leastFavMovies = ["Beverly Hills Chihuahua", "Beverly Hills Chihuahua 2", "Beverly Hills Chihuahua 3"];
window.console.log("Movies I like:\n\n");
var i;
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("\nMovies I regret watching:\n\n");
var x;
for (x = 0; x < leastFavMovies.length; x += 1) {
    window.console.log(leastFavMovies[x]);
}
//STEP 9
var movies =  [];
movies[0] = "Rocky";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var leastFavMovies = ["Beverly Hills Chihuahua", "Beverly Hills Chihuahua 2", "Beverly Hills Chihuahua 3"];
movies = movies.concat(leastFavMovies);
movies = movies.sort();
movies = movies.reverse();
window.console.log(movies);
//STEP 10
var movies =  [];
movies[0] = "Rocky";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var leastFavMovies = ["Beverly Hills Chihuahua", "Beverly Hills Chihuahua 2", "Beverly Hills Chihuahua 3"];
movies = movies.concat(leastFavMovies);
movies = movies.sort();
movies = movies.reverse();
window.console.log(movies.pop());
//STEP 11
var movies =  [];
movies[0] = "Rocky";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var leastFavMovies = ["Beverly Hills Chihuahua", "Beverly Hills Chihuahua 2", "Beverly Hills Chihuahua 3"];
movies = movies.concat(leastFavMovies);
movies = movies.sort();
movies = movies.reverse();
window.console.log(movies.shift());
//STEP 12
var movies =  [];
movies[0] = "Rocky";
movies[1] = "Rocky II";
movies[2] = "Rocky III";
movies[3] = "Rocky IV";
movies[4] = "Rocky V";
movies[5] = "Rocky Balboa";
movies[6] = "Creed";
var leastFavMovies = ["Beverly Hills Chihuahua", "Beverly Hills Chihuahua 2", "Beverly Hills Chihuahua 3"];
movies = movies.concat(leastFavMovies);
movies = movies.sort();
movies = movies.reverse();
var moreFavMovies = ["Rush Hour", "Rush Hour 2", "Rush Hour 3"];
var i;
for (i = 0; i < leastFavMovies.length; i += 1) {
    movies[movies.indexOf(leastFavMovies[i])] = moreFavMovies[i];
}
window.console.log(movies);

//STEP 13
var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Emily Kay";
employee2["title"] = "Web Designer";
employee2["department"] = "UI/UX";
employee2["isCurrent"] = true;
var employees = [employee1, employee2];
window.console.log(employees[1]["name"]);
//STEP 14
var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Emily Kay";
employee2["title"] = "Web Designer";
employee2["department"] = "UI/UX";
employee2["isCurrent"] = true;
var employees = [employee1, employee2];
var i;
for (i = 0; i < employees.length; i += 1){
    window.console.log(employees[i]["name"]);
}
//STEP 15
var employee1 = [];
employee1["id"] = 4235;
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["id"] = 4236;
employee2["name"] = "Emily Kay";
employee2["title"] = "Web Designer";
employee2["department"] = "UI/UX";
employee2["isCurrent"] = true;
var employee3 = [];
employee3["id"] = 4237;
employee3["name"] = "Lynda Reeves";
employee3["title"] = "Counselor";
employee3["department"] = "Administrative";
employee3["isCurrent"] = false;
var employees = [employee1, employee2, employee3];
var i;
for (i = 0; i < employees.length; i += 1){
    if (employees[i]["isCurrent"]) {
        window.console.log(employees[i]["name"]);
    }
}
//STEP 16
var movies = [["Rocky", 1], ["Rocky II", 2], ["Rocky III", 3], ["Rocky Iv", 4], ["Rocky V", 5]];
function movieNames(movie) {
    "use strict";
    window.console.log(movie[0]);
}
movies.filter(movieNames);
//STEP 17
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function (arrEmployees) {
    "use strict";
    window.console.log("Employees:\n\n");
    var i;
    for (i = 0; i < arrEmployees.length; i += 1) {
        window.console.log(arrEmployees[i]);
    }
};
showEmployee(employees);
//STEP 18   
var testValues = [58, '', 'abcd', true, null, false, 0];
function filterValues(myArray) {
    "use strict";
    var i, filteredArray = [];
    for (i = 0; i < myArray.length; i += 1) {
        if (myArray[i] !== false && myArray[i] !== null && myArray[i] !== 0 && myArray[i] !== '') {
            filteredArray.push(myArray[i]);
        }
    }
    return filteredArray;
}
window.console.log(filterValues(testValues));
//STEP 19
function getRandom(myArray) {
    "use strict";
    return myArray[Math.round(Math.random() * myArray.length)];
}
window.console.log(getRandom([99, 11, 88, 22, 77, 33, 66, 44, 55, 0]));
//STEP 20 */
function getHighest(myArray) {
    "use strict";
    return myArray.sort().pop();
}
window.console.log(getHighest([99, 11, 88, 22, 77, 33, 66, 44, 55, 0]));