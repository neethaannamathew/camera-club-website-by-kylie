var input_text;
var actual_password ="p3p4105";
input_text=prompt('Enter the password to get to the page.');
if(input_text == actual_password){
alert('Access granted. Click Ok to view webpage.');
}
else{
    window.location="https://www.google.com/";
}
function homepage(){
    window.location="index.html";
}

function credits(){
    window.location="credits.html";
}