// function to turn the website into dark mode, i.e. change background to black and text to white
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";  
}
// function to revert back to light mode from dark mode, i.e. regular colours after user has been using dark mode
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}

// array of supplier list
const Suppliers = [
  'K + C Norton', 'Musgaves Marketplace', 'Ashbourne Meats', 'Vernon Catering',
  'Bulmers Ireland', 'Akta Cleaning Supplies', 'J.J. Darboven',
];

// function to display supplier list on the webpage
function displaySuppliers() {
  const supplierList = document.getElementById('supplier-list');

  Suppliers.forEach(supplier => {
    // create a new list item element
    const listItem = document.createElement('li');
    
    // set the text content of the list item
    listItem.textContent = supplier;

    // append the list item to the unordered list
    supplierList.appendChild(listItem);
  });
}

// call the function to display supplier list
displaySuppliers();

// function to display an alert when user submits booking form
function showAlert() {
  alert("Your Booking has been sent successfully!");
}

// validating the form using JS
function validateForm() {
  // retrieving form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let adult = document.getElementById('adult').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  
  // avoiding blank input
  if (name === '' || email === '' || phone === '' || adult === '' || date === '' || time === '') {
  alert('Please make sure all fields are filled out and there are no blanks.');
  return false;
  }
  // validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
  alert('Please enter a valid email address.');
  
  return false;
  }
  // validating name format
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name)) {
  alert('Name should only contain letters.');
  return false;
  }
  // validating phone number format
  const phoneRegex = /^\d{10,}$/g;
  if (!phoneRegex.test(phone)) {
  alert('Phone Number should only contain 10 numbers.');
  return false;
  }

  // if all validations call in function to say form was submitted successfully
  return showAlert();
  }
  
