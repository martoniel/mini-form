function showMessage() {
    const firstName = document.getElementByClassName("firstname").value;
    const surName = document.getElementByClassName("surname").value;
    const age = document.getElementByClassName("age").value;
    const gender = document.getElementByClassName("gender").value;    


const Message = 'HI, ${firstName} ${surName}, ${age} years old, ${gender}, welcome to our site!';

document.getElementByClassName("message").innerText = Message + "\nIf you want to continue click YES, if not click NO.";

document.getElementById("yes").style.display = "inline-block";
document.getElementById("no").style.display = "inline-block";}

function continueSite() {
    alert("Great! Enjoy your stay.");}

function exitSite(){
    alert("Goodbye! Enjoy Have a nice day.");}




