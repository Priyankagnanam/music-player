document.addEventListener("DOMContentLoaded", () => {
    const playlistData = [
      {
        title:"Aazhaporan Thamizhan",
        artist:"A R Rahman",
        imgSrc:"D:/Project Images/Aazhaporan tamizhan.jpg",
        songSrc:"D:/Project Songs/Aazhaporan.mp3"
      },
      {
        title:"Ella Pugazhum",
        artist:"A R Rahman",
        imgSrc:"D:/Project Images/Ella pugazhum.jpg",
        songSrc:"D:/Project Songs/Ella pugazhum.mp3"
      },
      {
        title:"Ethir Neechal",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Ethir Neechal.jpg",
        songSrc:"D:/Project Songs/Ethir neechal.mp3"
      },
      {
        title:"Ethirthu Nil",
        artist:"Yuvan Shankar Raja",
        imgSrc:"D:/Project Images/Ethirthu Nil.jpg",
        songSrc:"D:/Project Songs/Ethirthu nil.mp3"
      },
      {
        title:"Ezhu Velaikkara",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/ezhu velaikkara.jpg",
        songSrc:"D:/Project Songs/Ezhu velaikkara.mp3"
      },
      {
        title:"Innum Enna Thozha",
        artist:"Harris Jayaraj",
        imgSrc:"D:/Project Images/Innum enna thozha.jpg",
        songSrc:"D:/Project Songs/Innum enna thozha.mp3"
      },
      {
        title:"Kaiyile Aagasam",
        artist:"Saindhavi",
        imgSrc:"D:/Project Images/Kaiyile Aagasam .jpg",
        songSrc:"D:/Project Songs/Kaiyile aagasam.mp3"
      },
      {
        title:"Tamizhan Endru Sollada",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Tamizhan endru.jpg",
        songSrc:"D:/Project Songs/Tamizhan endru.mp3"
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
  
  
  
  