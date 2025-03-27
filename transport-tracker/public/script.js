document.getElementById('search-btn').addEventListener('click', fetchDepartures);

async function fetchDepartures() {
	  const station = document.getElementById('station-input').value.trim();
	  if (!station) return;

	  try {
		      const response = await fetch(`/api/departures?station=${station}`);
		      const departures = await response.json();
		      displayResults(departures);
		    } catch (error) {
			        document.getElementById('results').innerHTML = 
				          `<div class="error">Failed to load data. Check station code.</div>`;
			      }
}

function displayResults(departures) {
	  const resultsDiv = document.getElementById('results');
	  if (departures.length === 0) {
		      resultsDiv.innerHTML = `<div>No departures found.</div>`;
		      return;
		    }
	  resultsDiv.innerHTML = departures.map(d => `
	      <div class="departure">
	            <strong>${d.line}</strong> to ${d.destination} at ${d.time}
		        </div>
			  `).join('');
}
