function showMessage() {
    const firstName = document.getElementById("firstname").value;
    const surName = document.getElementById("surname").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;    


const Message = 'HI, ${firstName} ${surName}, ${age} years old, ${gender}, welcome to our site!';

document.getElementById("message").innerText = Message + "\nIf you want to continue click YES, if not click NO.";

document.getElementById("yes").style.display = "inline-block";
document.getElementById("no").style.display = "inline-block";}

function continueSite() {
    alert("Great! Enjoy your stay.");}

function exitSite(){
    alert("Goodbye! Enjoy Have a nice day.");}





