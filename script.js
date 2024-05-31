function predictPrice() {
  var region = document.getElementById('region').value;
  var numOfBedrooms = document.getElementById('numOfBedrooms').value;
  var numOfBathrooms = document.getElementById('numOfBathrooms').value;
  var apartmentSpace = document.getElementById('apartmentSpace').value;

  if (region && numOfBedrooms && numOfBathrooms && apartmentSpace) {
    if (numOfBedrooms >= 1 && numOfBedrooms <= 10 && numOfBathrooms >= 1 && numOfBathrooms <= 4 && apartmentSpace >= 20 && apartmentSpace <= 1000) {
      var url = `https://gp-r4ub.onrender.com/predict?region=${region}&num_of_bedrooms=${numOfBedrooms}&num_of_bathrooms=${numOfBathrooms}&apartment_space=${apartmentSpace}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          var predictedPrice = data.predicted_price;
          document.getElementById('priceOutput').innerText = `The price of an apartment with these specifications is likely to be ${predictedPrice} pounds`;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      alert('Please enter valid values for number of bedrooms (1-10), number of bathrooms (1-4), and apartment space (20-1000).');
    }
  } else {
    alert('Please fill in all fields.');
  }
}

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  fetch('https://gp-r4ub.onrender.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_email: email,
      user_password: password
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('loginOutput').innerText = data.error;
      } else {
        document.getElementById('loginOutput').innerText = data.message;
        window.location.href = "/prediction";
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function signup() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;

  fetch('https://gp-r4ub.onrender.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_name: name,
      user_email: email,
      user_phone: phone,
      user_password: password
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('signupOutput').innerText = data.error;
      } else {
        document.getElementById('signupOutput').innerText = data.message;
        window.location.href = "/login";
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
