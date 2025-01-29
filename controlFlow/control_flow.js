// Task 1

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

// Task 2

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

// Task 3

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Task 4

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let person = "Non-Subscriber";
let accessRights; 

// Task 5

switch(person){
    case "Employee": 
        accessRights = "Dietary Services";
        break;
    case "Enrolled Member":
        accessRights = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber": 
        accessRights = "Part of Dietary Services";
        break;
    case "Non-Subscriber": 
        accessRights = "None. ";
        break;
    default: 
        person = "Non-Subscriber";
}

let article = "a ";
if (person === "Employee" || person === "Enrolled Member"){
    article = "an ";
}
let message = "You are " + article + person + "." + "You have access to the following services: " + accessRights;

if (person != "Non-Subscriber"){
    alert(message);
}
else {
    alert(message + "You need to subscribe first to get access to a service.");
}
