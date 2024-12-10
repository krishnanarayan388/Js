const ctx = document.getElementById('bloodPressureChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2020', '2021', '2022'], // Example years
    datasets: [{
      label: 'Blood Pressure',
      data: [120, 130, 125], // Example data
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  }
});
