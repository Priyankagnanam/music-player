const wrapper = document.querySelector(".wrapper");
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
  ["Aazhaporan Thamizhan", "A R Rahman", "D:/Project Images/Aazhaporan tamizhan.jpg", "D:/Project Songs/Aazhaporan.mp3"],
  ["Adada Mazhada", "Yuvan Shankar Raja", "D:/Project Images/Paiya.jpg", "D:/Project Songs/Adada mazhada.mp3"],
  ["Adi Penne","Stephen Zechariah","D:/Project Images/Adi penne.jpg","D:/Project Songs/Adi penne.mp3"],
  ["Adi Rangi","D Imman","D:/Project Images/Adi rangi.jpg","D:/Project Songs/Adi rangi.mp3"],
  ["Adiye Azhage","Sean Rolden","D:/Project Images/adiye azhage.jpg","D:/Project Songs/adiye azhage.mp3"],
  ["Ambikapathy","Naresh Iyer","D:/Project Images/ambikapathy.jpg","D:/Project Songs/Ambikapathy.mp3"],
  ["Aradhya","Sid Sriram","D:/Project Images/Aradhya.jpg","D:/Project Songs/Aradhya.mp3"],
  ["Arabic Kuthu","Anirudh Ravichandar","D:/Project Images/Arabic Kuthu.jpg","D:/Project Songs/Arabic kuthu.mp3"],
  ["Arjunaru Villu","Vidyasagar","D:/Project Images/arjunaru villi.jpg","D:/Project Songs/Arjunaru villu.mp3"],
  ["Athinthom","Vidyasagar","D:/Project Images/Athinthom.jpg","D:/Project Songs/Athinthom.mp3"],
  ["Ava Enna","Harris Jayaraj","D:/Project Images/Ava enna .jpg","D:/Project Songs/Ava enna .mp3"],
  ["Aval","Santhosh Narayanan","D:/Project Images/aval.jpg","D:/Project Songs/Aval.mp3"],
  ["Darling Dambakku","Anirudh Ravichandar","D:/Project Images/Darling Dambakku.jpg","D:/Project Songs/Darling dambakku.mp3"],
  ["Donu Donu","Anirudh Ravichandar","D:/Project Images/Donu Donu.jpg","D:/Project Songs/Donu Donu.mp3"],
  ["Ella Pugazhum","A R Rahman","D:/Project Images/Ella pugazhum .jpg","D:/Project Songs/Ella pugazhum.mp3"],
  ["En Kadhal Solla","Yuvan Shankar Raja","D:/Project Images/Paiya.jpg","D:/Project Songs/En Kadhal solla.mp3"],
  ["Ennai Kollathey","Kumaresh","D:/Project Images/Ennai kollathey.jpg","D:/Project Songs/Ennai Kollathey.mp3"],
  ["Ennodu Nee Irunthal","Sid Sriram","D:/Project Images/Ennodu nee irunthal.jpg","D:/Project Songs/Ennodu nee irunthal.mp3"],
  ["Ethir Neechal","Anirudh Ravichandar","D:/Project Images/Ethir Neechal.jpg","D:/Project Songs/Ethir neechal.mp3"],
  ["Ethirthu Nil","Yuvan Shankar Raja","D:/Project Images/Ethirthu Nil.jpg","D:/Project Songs/Ethirthu nil.mp3"],
  ["Ezhu Velaikkara","Anirudh Ravichandar","D:/Project Images/ezhu velaikkara.jpg","D:/Project Songs/Ezhu velaikkara.mp3"],
  ["Hey Vetrivela","Ranjith","D:/Project Images/Hey Vetrivela.jpg","D:/Project Songs/Hey vetrivela.mp3"],
  ["Hukum","Anirudh Ravichandar","D:/Project Images/Hukum.jpg","D:/Project Songs/Hukum.mp3"],
  ["Idicha Pacharisi","Vijay Antony","D:/Project Images/Idicha Pacharisi.jpg","D:/Project Songs/Idicha pacharisi.mp3"],
  ["Innum Enna Thozha","Harris Jayaraj","D:/Project Images/Innum enna thozha.jpg","D:/Project Songs/Innum enna thozha.mp3"],
  ["Ithuvum Kadanthu Pogum","Sid Sriram","D:/Project Images/Ithuvum Kadanthu Pogum.jpg","D:/Project Songs/Ithuvum Kadanthu pogum.mp3"],
  ["Jimikki Ponnu","Thaman S","D:/Project Images/jimikki ponnu.jpg","D:/Project Songs/Jimikki Ponnu.mp3"],
  ["Kadhaippoma","Sid Sriram","D:/Project Images/kadhaippoma.jpg","D:/Project Songs/Kadhaippoma.mp3"],
  ["Kadhalai Solla Mudiyatha","A R Rahman","D:/Project Images/kadhalai solla mudiyatha.jpg","D:/Project Songs/En kadhalai solla mudiyatha.mp3"],
  ["Kaiyile Aagasam","Saindhavi","D:/Project Images/Kaiyile Aagasam .jpg","D:/Project Songs/Kaiyile aagasam.mp3"],
  ["Kannoram","Stephen Zechariah","D:/Project Images/Kannoram.jpg","D:/Project Songs/Kannoram.mp3"],
  ["Kanaa Kangiren","G V Prakash","D:/Project Images/Kanaa kangiren.jpg","D:/Project Songs/Kanaa Kangiren.mp3"],
  ["Katchi Sera","Sai Abhyankar","D:/Project Images/Katchi sera.jpg","D:/Project Songs/Katchi Sera.mp3"],
  ["Kattikida","Anirudh Ravichandar","D:/Project Images/kattikida.jpg","D:/Project Songs/Kattikida .mp3"],
  ["Madura Palapalakuthu", "Alex Samuel Jenito", "D:/Project Images/Madura palapalakuthu.jpg", "D:/Project Songs/madura palapalakuthu.mp3"],
  ["Maduraikku Pogathadi","A R Rahman","D:/Project Images/Maduraikku pogathadi.jpg","D:/Project Songs/Maduraikku pogathadi.mp3"],
  ["Mazhaithuli","A R Rahman","D:/Project Images/Mazhaithuli.jpg","D:/Project Songs/Mazhaithuli .mp3"],
  ["Mehabooba","Ananya Bhat","D:/Project Images/Mehabooba.jpg","D:/Project Songs/Mehabooba.mp3"],
  ["Minsara Poove","A R Rahman","D:/Project Images/Minsara poove.jpg","D:/Project Songs/Minsara Poove.mp3"],
  ["Neduvaali","Thaman S","D:/Project Images/neduvali.jpg","D:/Project Songs/Neduvali.mp3"],
  ["Nenjukulla Nee","Vijay Prakash","D:/Project Images/Nenjukkulla nee.jpg","D:/Project Songs/nenjukkulla nee.mp3"],
  ["Otha Sollala","Vel Murugan","D:/Project Images/otha sollala.jpg","D:/Project Songs/Otha sollala.mp3"],
  ["Oxygen","Hip Hop Tamizha","D:/Project Images/oxygen.jpg","D:/Project Songs/Oxygen.mp3"],
  ["Pookal Pookum Tharunam", "G V Prakash", "D:/Project Images/Pookal Pookum.jpg", "D:/Project Songs/Pookal Pookum.mp3"],
  ["Poovukkul","A R Rahman","D:/Project Images/Poovukkul.jpg","D:/Project Songs/Poovukkul.mp3"],
  ["Ranjithame","Thalapathy Vijay","D:/Project Images/ranjithame.jpg","D:/Project Songs/Ranjithame.mp3"],
  ["Siragugal","Yuvan Shankar Raja","D:/Project Images/Siragugal .jpg","D:/Project Songs/Siragugal.mp3"],
  ["So Baby", "Anirudh Ravichandar", "D:/Project Images/Ithuvarai partha pennil.jpg", "D:/Project Songs/Ithuvarai partha pennil.mp3"],
  ["Suthuthe Suthuthe","Yuvan Shankar Raja","D:/Project Images/Paiya.jpg","D:/Project Songs/Suthuthe suthuthe.mp3"],
  ["Tamizhan Endru Sollada","Anirudh Ravichandar","D:/Project Images/Tamizhan endru.jpg","D:/Project Songs/Tamizhan endru.mp3"],
  ["Thanni Can", "Harshath Khan", "D:/Project Images/Thanni Can.jpg", "D:/Project Songs/Thanni Can.mp3"],
  ["Thimiru Kattatha Di", "D SathyaPrakash", "D:/Project Images/Thimiru Kattatha di.jpg", "D:/Project Songs/Thimiru Kattatha di.mp3"],
  ["Unnakenna Venum Sollu", "Harris Jayaraj", "D:/Project Images/Unakenna vennum sollu.jpg", "D:/Project Songs/Unakenna venum sollu.mp3"],
  ["Usuraye Tholachen","Stephen Zecharia","D:/Project Images/usuraye tholachen.jpg","D:/Project Songs/Usuraye tholachen.mp3"],
  ["Vaadi Pulla Vaadi","Hip Hop Thamizha","D:/Project Images/Vaadi pulla.jpg","D:/Project Songs/Vaadi pulla.mp3"],
  ["Valayapatti","A R Rahman","D:/Project Images/Valayapatti.jpg","D:/Project Songs/Valayapatti.mp3"],
  ["Yaar Petra Magano","Anirudh Ravichandar","D:/Project Images/Yaar petra magano.jpg","D:/Project Songs/yaar petra magano.mp3"],
  ["Yaen Ennai Pirinthai","Sid Sriram","D:/Project Images/Yaen ennai.jpg","D:/Project Songs/yaen ennai pirinthai.mp3"],
  ["Yen Aala Pakka Poren","Shreya Ghoshal","D:/Project Images/Yen aala pakka poren.jpg","D:/Project Songs/Yen aala pakka poren.mp3"],
];

let musicIndex = localStorage.getItem('musicIndex') || 0;
let isMusicPaused = true;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Load the initial song
window.addEventListener("load", () => {
    loadMusic(musicIndex);
});

// Load music function
function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb][0];
    musicArtist.innerText = allMusic[indexNumb][1];
    musicImg.src = allMusic[indexNumb][2];
    mainAudio.src = allMusic[indexNumb][3];

    // Check if the current song is a favorite
    favBtn.innerText = favorites.includes(Number(indexNumb)) ? "❤️" : "♡"; // Update favorite button
}

// Play music function
function playMusic() {
    wrapper.classList.add("paused");
    musicImg.classList.add("rotate");
    playPauseBtn.innerHTML = `<p>▐▐</p>`;
    mainAudio.play();
    isMusicPaused = false;
}

// Pause music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove("rotate");
    playPauseBtn.innerHTML = `<b>▷</b>`;
    mainAudio.pause();
    isMusicPaused = true;
}

// Previous music function
function prevMusic() {
    musicIndex = (musicIndex - 1 + allMusic.length) % allMusic.length;
    loadMusic(musicIndex);
    playMusic();
}

// Next music function
function nextMusic() {
    musicIndex = (musicIndex + 1) % allMusic.length;
    loadMusic(musicIndex);
    playMusic();
}

// Toggle favorite function
function toggleFavorite() {
    const index = Number(musicIndex);
    if (favorites.includes(index)) {
        favorites.splice(favorites.indexOf(index), 1); // Remove from favorites
        favBtn.innerText = "♡"; // Change to empty heart
    } else {
        favorites.push(index); // Add to favorites
        favBtn.innerText = "❤️"; // Change to filled heart
    }
    localStorage.setItem('favorites', JSON.stringify(favorites)); // Update local storage
}

progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;
  
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
  });

// Event listeners
playPauseBtn.addEventListener("click", () => {
    isMusicPaused ? playMusic() : pauseMusic();
});

prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
favBtn.addEventListener("click", toggleFavorite);

mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) currentSec = `0${currentSec}`;
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if (totalSec < 10) totalSec = `0${totalSec}`;
    musicDuration.innerText = `${totalMin}:${totalSec}`;
});

mainAudio.addEventListener("ended", nextMusic);
