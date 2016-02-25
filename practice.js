
function checkAge() {
    var age = prompt("What is your age?");
    console.log('Hello! You are ' + age + ' years old!');
    if (age < 21) {
        alert('You are under 21!');
    }
    else {
        alert('You are old enough to enter!');
    }

}
function checkGrade() {
    var grade = prompt('What is your letter grade in your favorite class?');
    grade = grade.toUpperCase();
    switch (grade) {
        case 'A':
            alert('You are an excellent student!');
            break;
        case 'B':
            alert('You are a good student!');
            break;
        case 'C':
            alert('You can do better!');
            break;
        case 'D':
            alert('You should study more!');
            break;
        case 'F':
            alert('You need a tutor!');
            break;
        default:
            alert("I'm sorry, I didn't understand you!");
    }
}  

function add (op1, op2) {
    return op1 + op2;
}  
function subtract (op1, op2) {
    return op1 - op2; 
}
function divide (op1, op2) {
    if (op2 !== 0) {
        return op1 / op2;
    } else alert ("You have destroyed the universe!");  
}

function multiply (op1, op2) {
    return op1 * op2;
}