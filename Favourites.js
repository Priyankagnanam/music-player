/*/ Store favorites
//let favoriteSongs = [];

// DOM Elements
const songListElement = document.getElementById('song-list');
const favoriteListElement = document.getElementById('favorite-list');

// Function to generate the list of available songs
function loadSongs() {
    songListElement.innerHTML = ''; // Clear previous list
    allMusic.forEach((song,index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${song.title} - ${song.artist}
            <button class="heart-button" data-id="${song.id}">&hearts;</button>
        `;
        songListElement.appendChild(li);
    });
}

// Function to generate the list of favorite songs
function loadFavoriteSongs() {
    favoriteListElement.innerHTML = ''; // Clear previous list
    favMusic.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        favoriteListElement.appendChild(li);
    });
}

// Function to add/remove a song from favorites
function toggleFavorite(songIndex) {
    const song = allMusic[songIndex]
    // Check if the song is already in the favorites
    const songInFavorites = favMusic.find(favSong => favSong[0] === song[0]);

    if (songInFavorites) {
        // Remove from favorites
        favMusic = favMusic.filter(favSong => favSong[0]== song[0]);
    } else {
        // Add to favorites
        favMusic.push(song);
    }

    loadFavoriteSongs(); // Update the displayed favorites list
}

// Event listener for the heart buttons
songListElement.addEventListener('click', function (event) {
    if (event.target.classList.contains('heart-button')) {
        const songIndex = parseInt(event.target.getAttribute('data-index'));
        toggleFavorite(songIndex);
        
        // Toggle heart button color
        event.target.classList.toggle('liked');
    }
});

// Load the songs when the page loads
window.addEventListener('load',()=>{
  loadSongs();
});*/

/*/ Store favorites
let favMusic = [];

// DOM Elements
const songListElement = document.getElementById('song-list');
const favoriteListElement = document.getElementById('favorite-list');

// Function to generate the list of available songs
function loadSongs() {
    songListElement.innerHTML = ''; // Clear previous list
    allMusic.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${song[0]} - ${song[1]}
            <button class="heart-button" data-id="${index}">&hearts;</button>
        `;
        songListElement.appendChild(li);
    });
}

// Function to generate the list of favorite songs
function loadFavoriteSongs() {
    favoriteListElement.innerHTML = ''; // Clear previous list
    favMusic.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song[0]} - ${song[1]}`;
        favoriteListElement.appendChild(li);
    });
}

// Function to add/remove a song from favorites
function toggleFavorite(songIndex) {
    const song = allMusic[songIndex];
    // Check if the song is already in the favorites
    const songInFavorites = favMusic.find(favSong => favSong[0] === song[0]);

    if (songInFavorites) {
        // Remove from favorites
        favMusic = favMusic.filter(favSong => favSong[0] !== song[0]);
    } else {
        // Add to favorites
        favMusic.push(song);
    }

    loadFavoriteSongs(); // Update the displayed favorites list
}

// Event listener for the heart buttons
songListElement.addEventListener('click', function (event) {
    if (event.target.classList.contains('heart-button')) {
        const songIndex = parseInt(event.target.getAttribute('data-id'));
        toggleFavorite(songIndex);

        // Toggle heart button color
        event.target.classList.toggle('liked');
    }
});

// Load the songs when the page loads
window.addEventListener('load', () => {
    loadSongs();
    loadFavoriteSongs();
});
*/

// Store favorites
let favMusic = [];

// DOM Elements
const favoriteListElement = document.getElementById('favorite-list');

// Function to generate the list of favorite songs
function loadFavoriteSongs() {
  const storedFavorites = localStorage.getItem('favMusic');
  if (storedFavorites) {
    favMusic = JSON.parse(storedFavorites);
  }

  favoriteListElement.innerHTML = ''; // Clear previous list

  favMusic.forEach(song => {
    const li = document.createElement('li');
    li.textContent = `${song[0]} - ${song[1]}`;
    favoriteListElement.appendChild(li);
  });
}

// Load the favorite songs when the page loads
window.addEventListener('load', () => {
  loadFavoriteSongs();
});

