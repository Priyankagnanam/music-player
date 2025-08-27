document.addEventListener("DOMContentLoaded", () => {
    const playlistData = [
      {
        title:"Ava Enna",
        artist:"Harris Jayaraj",
        imgSrc:"D:/Project Images/Ava enna .jpg",
        songSrc:"D:/Project Songs/Ava enna .mp3"
      },
      {
        title:"Innum Enna Thozha",
        artist:"Harris Jayaraj",
        imgSrc:"D:/Project Images/Innum enna thozha.jpg",
        songSrc:"D:/Project Songs/Innum enna thozha.mp3"
      },
      {
        title:"Ithuvum Kadanthu Pogum",
        artist:"Sid Sriram",
        imgSrc:"D:/Project Images/Ithuvum Kadanthu Pogum.jpg",
        songSrc:"D:/Project Songs/Ithuvum Kadanthu pogum.mp3"
      },
      {
        title:"Ennai Kollathey",
        artist:"Kumaresh",
        imgSrc:"D:/Project Images/Ennai kollathey.jpg",
        songSrc:"D:/Project Songs/Ennai Kollathey.mp3"
      },
      {
        title:"Kadhalai Solla Mudiyatha",
        artist:"A R Rahman",
        imgSrc:"D:/Project Images/kadhalai solla mudiyatha.jpg",
        songSrc:"D:/Project Songs/En kadhalai solla mudiyatha.mp3"
      },
      {
        title:"Vaadi Pulla Vaadi",
        artist:"Hip Hop Thamizha",
        imgSrc:"D:/Project Images/Vaadi pulla.jpg",
        songSrc:"D:/Project Songs/Vaadi pulla.mp3"
      },
      {
        title:"Yaar Petra Magano",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Yaar petra magano.jpg",
        songSrc:"D:/Project Songs/yaar petra magano.mp3"
      },
      {
        title:"Yaen Ennai Pirinthai",
        artist:"Sid Sriram",
        imgSrc:"D:/Project Images/Yaen ennai.jpg",
        songSrc:"D:/Project Songs/yaen ennai pirinthai.mp3"
      },
      
      
    ];
  
    const playlistElement = document.getElementById("playlist");
    const audioElement = document.getElementById("audio");
    const imgElement = document.getElementById("album-art");
  
    if (!playlistElement || !audioElement || !imgElement) {
      console.error("Elements not found");
      return;
    }
  
    playlistData.forEach((song) => {
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
  });
  
  
  
  