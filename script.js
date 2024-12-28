var programming_languages = ["Javascript", "Python", "C", "Java"];

document.write(programming_languages);
document.write("<br>");
document.write("<br>");
// Accessing array elements
document.write(programming_languages[0]);
document.write("<br>");

document.write(programming_languages[1]);
document.write("<br>");

document.write(programming_languages[2]);
document.write("<br>");

document.write(programming_languages[3]);
document.write("<br>");

// Array Methods
// join() is used to convert an array into a string.
document.write(programming_languages.join(" ~ "));
document.write("<br>");

programming_languages.pop();
programming_languages.pop();
document.write(programming_languages);
document.write("<br>");

function add(a, b) {
    document.write("add is called" + "<br>");
    return a + b;
}
function average(a, b) {
    document.write("average is called" + "<br>")
    return add(a, b) / 2;
}
let result = average(10, 20);
document.write(result);