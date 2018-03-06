// Initialize Firebase
var config = {
    apiKey: "00000000000000000000000000000000000000000000000",
    authDomain: "0000000000000000000000000000000000000000000000",
    databaseURL: "000000000000000000000000000000000000000",
    projectId: "000000000000000000000000000000000000",
    storageBucket: "00000000000000000000000000000000000000000000000",
    messagingSenderId: "000000000000000000000000"
  };
firebase.initializeApp(config);

// References messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm (e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}
