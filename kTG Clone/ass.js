function showMessage() {
    const firstName = document.getElementsByClassName("firstname").value;
    const surName = document.getElementsByClassName("surname").value;
    const age = document.getElementsByClassName("age").value;
    const gender = document.getElementsByClassName("gender").value;    


const Message = 'HI, ${firstName} ${surName}, ${age} years old, ${gender}, welcome to our site!';

document.getElementsByClassName("message").innerText = Message + "\nIf you want to continue click YES, if not click NO.";

document.getElementsById("yes").style.display = "inline-block";
document.getElementsById("no").style.display = "inline-block";}

function continueSite() {
    alert("Great! Enjoy your stay.");}

function exitSite(){
    alert("Goodbye! Enjoy Have a nice day.");}



