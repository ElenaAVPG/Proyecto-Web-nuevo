
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDu8sH52WoTuGD247V_ZAlIuq4RFZmdiIU",
    authDomain: "bordados-812e3.firebaseapp.com",
    databaseURL: "https://bordados-812e3.firebaseio.com",
    projectId: "bordados-812e3",
    storageBucket: "bordados-812e3.appspot.com",
    messagingSenderId: "164215533454"
  };
  firebase.initializeApp(config);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var apellido = getInputVal('company');
  var email = getInputVal('email');
  var pais = getInputVal('phone');
  var opinion = getInputVal('message');

  // Save message
  saveMessage(name, apellido, email, pais, opinion);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nombre, apellido, email, pais, opinion){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nombre: nombre,
    apellido:apellido,
    email:email,
    pais:pais,
    opinion:opinion
  });
}