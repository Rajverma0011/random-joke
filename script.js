
async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();

        
        const jokeText = `${data.setup} 😄 ${data.punchline}`;
        document.getElementById('joke').textContent = jokeText;
    } catch (error) {
        document.getElementById('joke').textContent = 'Failed to fetch joke 😞';
        console.error('Error fetching joke:', error);
    }
}


document.getElementById('getJokeBtn').addEventListener('click', fetchJoke);
