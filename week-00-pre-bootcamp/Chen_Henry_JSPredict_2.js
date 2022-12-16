// Code Snippet 1

function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/* 
Output: T-Diagram

var                 | value
auntContactInfo[0]  | Paula
auntContactInfo[1]  | Smith
auntContactInfo[2]  | 1234 Main Street
auntContactInfo[3]  | St. Louis
auntContactInfo[4]  | MO
auntContactInfo[5]  | 12345
*/


// Code Snippet 2

function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}

/* 
Output: T-Diagram

var                         | value
produce                     | [apples, oranges]
frozen                      | [broccoli, ice cream] 
frozen.push("hashbrowns")   | [broccoli, ice cream, hashbrowns]
*/


// Code Snippet 3

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);



/* 
Output: T-Diagram

var                             | value
movieLibrary                    | [Bambi, E.T., Toy Story]
movieLibrary.push("Zoro")       | [Bambi, E.T., Toy Story, Zoro]
movieLibrary[1] = "Beetlejuice" | [Bambi, Beetlejuice, Toy Story, Zoro]
console.log(movieLibrary)       | [Bambi, Beetlejuice, Toy Story, Zoro]
*/