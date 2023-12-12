
const linechartData = {
  musicGenreChart: {
    labels: ['1970s', '1980s', '1990s', '2000s', '2010s'],
    datasets: [
        {
            label: 'Rock',
            data: [500, 600, 400, 300, 200],
            borderColor: 'red',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Pop',
            data: [200, 300, 500, 700, 600],
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Hip Hop',
            data: [100, 200, 400, 800, 1000],
            borderColor: 'green',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Country',
            data: [50, 100, 150, 200, 250],
            borderColor: 'orange',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'Electronic',
            data: [300, 400, 300, 200, 100],
            borderColor: 'purple',
            borderWidth: 2,
            fill: false,
        },
        {
            label: 'R&B',
            data: [120, 150, 180, 200, 250],
            borderColor: 'brown',
            borderWidth: 2,
            fill: false,
        },
        // Add more genres and their data as needed
    ],
},

};

// Create charts based on the provided data
function createChart(canvasId, data) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  return new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
          responsive: false, // Adjust as needed
          maintainAspectRatio: false,
          // Add more chart options here
      },
  });
}

// Example usage for musicGenreChart
createChart('musicGenreChart', chartData.musicGenreChart);
