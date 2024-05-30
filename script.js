document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('predictionForm');
  const priceOutput = document.getElementById('priceOutput');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const region = document.getElementById('region').value;
    const numBedrooms = document.getElementById('numBedrooms').value;
    const numBathrooms = document.getElementById('numBathrooms').value;
    const apartmentSpace = document.getElementById('apartmentSpace').value;

    fetch(`https://gp-r4ub.onrender.com/predict?region=${region}&num_of_bedrooms=${numBedrooms}&num_of_bathrooms=${numBathrooms}&apartment_space=${apartmentSpace}`)
      .then(response => response.json())
      .then(data => {
        const predictedPrice = data.predicted_price;
        priceOutput.innerHTML = `The price of an apartment with these specifications is likely to be <span class="bold">${predictedPrice}</span> pounds`;
      })
      .catch(error => {
        console.error('Error fetching prediction:', error);
        priceOutput.innerHTML = 'Error fetching prediction. Please try again later.';
      });
  });
});
