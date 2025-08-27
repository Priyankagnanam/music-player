const wrapper = document.querySelector(".wrapper");
const musicImg = wrapper.querySelector("#img");
const musicName = wrapper.querySelector(".name");
const musicArtist = wrapper.querySelector(".artist");
const playPauseBtn = wrapper.querySelector(".play-pause");
const prevBtn = wrapper.querySelector("#prev");
const nextBtn = wrapper.querySelector("#next");
const favBtn = wrapper.querySelector("#fav");
const mainAudio = wrapper.querySelector("#main-audio");
const progressArea = wrapper.querySelector(".progress-area");
const progressBar = progressArea.querySelector(".progress-bar");
const musicCurrentTime = wrapper.querySelector(".current-time");
const musicDuration = wrapper.querySelector(".max-duration");
const playlistElement = document.getElementById("playlist");

const allMusic = [
    // Your music data
    ["Aazhaporan Thamizhan","A R Rahman","D:/Project Images/Aazhaporan tamizhan.jpg","D:/Project Songs/Aazhaporan.mp3"],
    ["Adada Mazhada","Yuvan Shankar Raja","D:/Project Images/Paiya.jpg","D:/Project Songs/Adada mazhada.mp3"],
    // ... (more songs)
];

//let favorites = [];


// Initialize variables
let playCounts = JSON.parse(localStorage.getItem("playCounts")) || {};
let musicIndex = 0;
let isMusicPaused = true;
let favMusic = JSON.parse(localStorage.getItem("favMusic")) || [];

// Load music and update UI
function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb][0];
    musicArtist.innerText = allMusic[indexNumb][1];
    musicImg.src = allMusic[indexNumb][2];
    mainAudio.src = allMusic[indexNumb][3];

    // Update favorite button state
    favBtn.innerText = favMusic.some(fav => fav[0] === allMusic[indexNumb][0]) ? "🧡" : "♡";
}

// Play music
function playMusic() {
    wrapper.classList.add("paused");
    musicImg.classList.add("rotate");
    playPauseBtn.innerHTML = "<p>▐▐</p>";
    mainAudio.play();
    isMusicPaused = false;
    incrementPlayCount(musicIndex);
}

// Pause music
function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove("rotate");
    playPauseBtn.innerHTML = "<b>▷</b>";
    mainAudio.pause();
    isMusicPaused = true;
}

// Add or remove from favorites
function toggleFavorite() {
    const currentSong = allMusic[musicIndex];
    if (favBtn.innerText === "🧡") {
        favBtn.innerText = "♡";
        //favorites.pop(currentSong);
        favMusic = favMusic.filter(fav => fav[0] !== currentSong[0]);
    } else {
        favBtn.innerHTML = "🧡";
        favourites.push(currentSong);
    }
    localStorage.setItem("favMusic", JSON.stringify(favMusic)); // Save favorites
    loadFavorites(); // Refresh favorites display
}

// Load favorites into the playlist
function loadFavorites() {
    playlistElement.innerHTML = ''; // Clear current favorites
    favMusic.forEach((song) => {
        const li = document.createElement("li");
        li.textContent = `${song[0]} - ${song[1]}`;
        li.dataset.songSrc = song[3];
        playlistElement.appendChild(li);
    });
}

// Increment play count for a song
function incrementPlayCount(songIndex) {
    const songName = allMusic[songIndex][0];
    playCounts[songName] = (playCounts[songName] || 0) + 1;
    localStorage.setItem("playCounts", JSON.stringify(playCounts)); // Save counts
}

// Show most played songs
function showMostPlayedSongs() {
    const sortedSongs = Object.entries(playCounts).sort((a, b) => b[1] - a[1]);
    let mostPlayedList = "Most Played Songs:\n";
    sortedSongs.forEach(([songName, count]) => {
        mostPlayedList += `${songName}: ${count} plays\n`;
    });
    alert(mostPlayedList); // Display the most played songs
}

// Load music on page load
window.addEventListener("load", () => {
    loadMusic(musicIndex);
    loadFavorites(); // Load favorites on page load
});

// Event Listeners
playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
});

prevBtn.addEventListener("click", () => {
    musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
    loadMusic(musicIndex);
    playMusic();
});

nextBtn.addEventListener("click", () => {
    musicIndex = (musicIndex + 1) % allMusic.length;
    loadMusic(musicIndex);
    playMusic();
});

favBtn.addEventListener("click", () => {
    toggleFavorite();
});

// Update progress and time display
mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    progressBar.style.width = `${(currentTime / duration) * 100}%`;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    musicCurrentTime.innerText = `${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`;

    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    musicDuration.innerText = `${totalMin}:${totalSec < 10 ? '0' : ''}${totalSec}`;
});

// Seek through the audio
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});

// Auto-play next song when current ends
mainAudio.addEventListener("ended", () => {
    nextBtn.click(); // Simulate next button click
});

// Load favorites initially
loadFavorites();

// Sample list of favorite songs with metadata

/*const playlistElement = document.getElementById("playlist");
  const audioElement = document.getElementById("audio");
  const imgElement = document.getElementById("album-art");

  if (!playlistElement || !audioElement || !imgElement) {
    console.error("Elements not found");
    return;
  }

  favMusic.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.dataset.imgSrc = song.imgSrc;
    li.dataset.songSrc = song.songSrc;
    
    playlistElement.appendChild(li);
  });

  playlistElement.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const songSrc = e.target.dataset.songSrc;
      const imgSrc = e.target.dataset.imgSrc;
      imgElement.src = imgSrc;
      audioElement.src = songSrc;
      
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      const activeSong = playlistElement.querySelector(".active");
      if (activeSong) {
        activeSong.classList.remove("active");
      }
      e.target.classList.add("active");
    }
  });

const favBtn = document.querySelector("#fav");
const playlistElement = document.getElementById("playlist");

let favMusic = JSON.parse(localStorage.getItem("favMusic")) || [];

// Function to toggle favorite status of the current song
function toggleFavorite(currentSong) {
    if (favBtn.innerText === `🧡`) {
        favBtn.innerText = `♡`;
        favMusic = favMusic.filter(fav => fav[0] !== currentSong[0]);
    } else {
        favBtn.innerHTML = `🧡`;
        favMusic.push(currentSong);
    }
    localStorage.setItem("favMusic", JSON.stringify(favMusic)); // Save favorites
    loadFavorites(); // Refresh favorites display
}

// Function to load favorites into the playlist
function loadFavorites() {
    playlistElement.innerHTML = ''; // Clear current favorites
    favMusic.forEach((song) => {
        const li = document.createElement("li");
        li.textContent = `${song[0]} - ${song[1]}`; // Format: Song Name - Artist
        li.dataset.songSrc = song[3]; // Assuming song[3] is the audio source
        playlistElement.appendChild(li);
    });
}

// Event listener for the favorite button
favBtn.addEventListener("click", () => {
    const currentSong = allMusic[musicIndex]; // Replace with your method to get the current song
    toggleFavorite(currentSong);
});

// Load favorites initially
loadFavorites();

// List of available songs
const songs = [
    { title: "Song One", artist: "Artist One", src: "song1.mp3", albumArt: "album1.jpg" },
    { title: "Song Two", artist: "Artist Two", src: "song2.mp3", albumArt: "album2.jpg" },
    { title: "Song Three", artist: "Artist Three", src: "song3.mp3", albumArt: "album3.jpg" }
];

// Empty array to store the user's favorite songs
let favoriteSongs = [];

// DOM Elements
const playlistElement = document.getElementById('playlist');
const albumArtElement = document.getElementById('album-art');
const audioElement = document.getElementById('audio');

// Function to display favorite songs in the playlist
function displayFavorites() {
    // Clear the playlist
    playlistElement.innerHTML = '';

    // Display each favorite song in the playlist
    favoriteSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => playSong(song)); // Add click event to play the song
        playlistElement.appendChild(li);
    });
}

// Function to add a song to the favorites
function addSongToFavorites(song) {
    // Check if the song is already in the favorites
    const songExists = favoriteSongs.some(favSong => favSong.title === song.title);
    
    if (!songExists) {
        favoriteSongs.push(song);
        alert(`${song.title} has been added to your favorites!`);
        displayFavorites(); // Update the playlist
    } else {
        alert(`${song.title} is already in your favorites!`);
    }
}

// Function to play a selected song
function playSong(song) {
    // Set album art
    albumArtElement.src = song.albumArt;
    albumArtElement.style.display = 'block';

    // Set the audio source
    audioElement.src = song.src;
    audioElement.style.display = 'block';
    
    // Play the song
    audioElement.play();
}

// Sample code to add songs to favorites (e.g., could be tied to a "Like" button)
addSongToFavorites(songs[0]); // Add first song to favorites for testing
addSongToFavorites(songs[1]); // Add second song to favorites for testing

// Load favorites on page load (you can add this to the window.onload or run this at the end)
displayFavorites();*/



// List of songs


// Store favorites
//let favoriteSongs = [];

// DOM Elements
const songListElement = document.getElementById('song-list');
const favoriteListElement = document.getElementById('favorite-list');

// Function to generate the list of available songs
function loadSongs() {
    songListElement.innerHTML = ''; // Clear previous list
    songs.forEach(song => {
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
    favoriteSongs.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        favoriteListElement.appendChild(li);
    });
}

// Function to add/remove a song from favorites
function toggleFavorite(songId) {
    const song = songs.find(s => s.id === songId);

    // Check if the song is already in the favorites
    const songInFavorites = favoriteSongs.find(favSong => favSong.id === songId);

    if (songInFavorites) {
        // Remove from favorites
        favoriteSongs = favoriteSongs.filter(favSong => favSong.id !== songId);
    } else {
        // Add to favorites
        favoriteSongs.push(song);
    }

    loadFavoriteSongs(); // Update the displayed favorites list
}

// Event listener for the heart buttons
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('heart-button')) {
        const songId = parseInt(event.target.getAttribute('data-id'));
        toggleFavorite(songId);
        
        // Toggle heart button color
        event.target.classList.toggle('liked');
    }
});

// Load the songs when the page loads
loadSongs();

/*const wrapper = document.querySelector(".wrapper");
const musicImg = wrapper.querySelector("img");
const musicName = wrapper.querySelector(".name");
const musicArtist = wrapper.querySelector(".artist");
const playPauseBtn = wrapper.querySelector(".play-pause");
const prevBtn = wrapper.querySelector("#prev");
const nextBtn = wrapper.querySelector("#next");
const favBtn = wrapper.querySelector("#fav");
const mainAudio = wrapper.querySelector("#main-audio");
const progressArea = wrapper.querySelector(".progress-area");
const progressBar = progressArea.querySelector(".progress-bar");
const musicCurrentTime = wrapper.querySelector(".current-time");
const musicDuration = wrapper.querySelector(".max-duration");

const allMusic = [
  ["Aazhaporan Thamizhan","A R Rahman","D:/Project Images/Aazhaporan tamizhan.jpg","D:/Project Songs/Aazhaporan.mp3"],
  ["Adada Mazhada","Yuvan Shankar Raja","D:/Project Images/Paiya.jpg","D:/Project Songs/Adada mazhada.mp3"],
  
];

//let playCounts = JSON.parse(localStorage.getItem("playCounts")) || {};
let musicIndex = 0;
let isMusicPaused = true;
let favMusic=[];

window.addEventListener("load", () => {
  loadMusic(musicIndex);
});

/*function updatePlayCounts() {
  localStorage.setItem("playCounts", JSON.stringify(playCounts));
}

function incrementPlayCount(songIndex) {
  const songName = allMusic[songIndex][0];
  if (!playCounts[songName]) {
    playCounts[songName] = 1;
  } else {
    playCounts[songName]++;
  }
  updatePlayCounts();
}

function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb][0];
  musicArtist.innerText = allMusic[indexNumb][1];
  musicImg.src = allMusic[indexNumb][2];
  mainAudio.src = allMusic[indexNumb][3];
  
}

function playMusic() {
  wrapper.classList.add("paused");
  musicImg.classList.add("rotate");
  playPauseBtn.innerHTML = `<p>▐▐</p>`;
  mainAudio.play();
  //let favMusic =favBtn.innerText==`🧡`?favMusic.appendChild(allMusic[indexNumb]):favBtn.innerText=`♡`;
  isMusicPaused = false;
  //incrementPlayCount(musicIndex); 
}

/*function showMostPlayedSongs() {
  // Sort songs by play count
  const sortedSongs = Object.entries(playCounts).sort((a, b) => b[1] - a[1]);

  // Display most played songs
  let mostPlayedList = "Most Played Songs:\n";
  sortedSongs.forEach(([songName, count]) => {
    mostPlayedList += `${songName}: ${count} plays\n`;
  });
  alert(mostPlayedList); // Display the most played songs
}

mostPlayedBtn.addEventListener("click", showMostPlayedSongs);

function pauseMusic() {
  wrapper.classList.remove("paused");
  musicImg.classList.remove("rotate");
  playPauseBtn.innerHTML = `<b>▷</b>`;
  mainAudio.pause();
  isMusicPaused = true;
}

function favourite(){
  if(favBtn.innerText===`🧡`){
    favBtn.innerText=`♡`;
    favMusic.pop();
  }
  else{
    favBtn.innerText=`🧡`;
    favMusic.push(allMusic[musicIndex]);
  }
}

function prevMusic() {
  favBtn.innerText=`♡`;
  musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
  loadMusic(musicIndex);
  playMusic();
}

function nextMusic() {
  favBtn.innerText= `♡`;
  musicIndex = (musicIndex + 1) % allMusic.length;
  loadMusic(musicIndex);
  playMusic();
}

playPauseBtn.addEventListener("click", () => {
  const isMusicPlay = wrapper.classList.contains("paused");
  isMusicPlay ? pauseMusic() : playMusic();
}); 

prevBtn.addEventListener("click", () => {
  prevMusic(); 
});

nextBtn.addEventListener("click", () => {
  nextMusic();
});

favBtn.addEventListener("click",() => {
  favourite();
});

mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current-time");
  let musicDuration = wrapper.querySelector(".max-duration");
  
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  
  let totalMin = Math.floor(duration / 60);
  let totalSec = Math.floor(duration % 60);
  if (totalSec < 10) {
    totalSec = `0${totalSec}`;
  }
  musicDuration.innerText = `${totalMin}:${totalSec}`;
  musicDuration.innerText = `${Math.floor(duration/60)}:${Math.floor(duration%60)}`;
});

mainAudio.addEventListener("loadedmetadata",() => {
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration/60);
    let totalSec = Math.floor(mainAdDuration%60);
    if(totalSec < 10)
    {
        totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = (`${totalMin}:${totalSec}`);
});

progressArea.addEventListener("click",(e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let SongDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * SongDuration;
    playMusic();
});

    
mainAudio.addEventListener("ended",() => {
    nextMusic();
});

//favourites

const playlistElement = document.getElementById("playlist");
const audioElement = document.getElementById("audio");

allMusic.forEach((song2) => {
  if(song2[4]===`🧡`){
    favMusic.push(song2);
  }
})


favMusic.forEach((song) => {
  const li = document.createElement("li");
  li.textContent = `${song[0]} - ${song[1]}`;
  //li.dataset.imgSrc = song.imgSrc;
  li.dataset.songSrc = song.songSrc;
  
  playlistElement.appendChild(li);
});

playlistElement.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const songSrc = e.target.dataset.songSrc;
    //const imgSrc = e.target.dataset.imgSrc;
    //imgElement.src = imgSrc;
    audioElement.src = songSrc;
    
    audioElement.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
    const activeSong = playlistElement.querySelector(".active");
    if (activeSong) {
      activeSong.classList.remove("active");
    }
    e.target.classList.add("active");
  }
});*/
