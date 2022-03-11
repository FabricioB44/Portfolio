function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "fabricio.balino@gmail.com",
        Password : "zmadzerfxpxsursv",
        To : 'fabricio.balino@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name: " + document.getElementById("name").value + 
        "<br> Phone: " + document.getElementById("phone").value +
        "<br> Message: <br>" + document.getElementById("message").value
    }).then(
    message => alert("Message sent succesfully. Thank you!")
    );
}

